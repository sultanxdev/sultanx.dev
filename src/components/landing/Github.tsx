'use client';

import { githubConfig } from '@/config/Github';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

import Container from '../common/Container';
import GithubIcon from '../svgs/Github';
import { Button } from '../ui/button';

// Hook to measure container width for responsive graph sizing
function useContainerWidth() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const measure = useCallback(() => {
    if (ref.current) {
      setWidth(ref.current.getBoundingClientRect().width);
    }
  }, []);

  useEffect(() => {
    measure();
    const observer = new ResizeObserver(() => measure());
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [measure]);

  return { ref, width };
}

const ActivityCalendar = dynamic(
  () => import('react-activity-calendar').then((mod) => mod.default),
  { ssr: false },
);

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

// Filter contributions to a specific year
function filterByYear(
  contributions: ContributionItem[],
  year: number,
): ContributionItem[] {
  return contributions.filter((item) => {
    const itemYear = new Date(item.date).getFullYear();
    return itemYear === year;
  });
}

// Filter contributions to the last 365 days
function filterLastYear(contributions: ContributionItem[]): ContributionItem[] {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  return contributions.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= oneYearAgo;
  });
}

// Year dropdown component
function YearSelector({
  selectedYear,
  onYearChange,
  years,
}: {
  selectedYear: string;
  onYearChange: (year: string) => void;
  years: string[];
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="border-border bg-background hover:bg-accent text-foreground inline-flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors"
      >
        {selectedYear === 'current' ? 'Current' : selectedYear}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="border-border bg-background absolute right-0 z-50 mt-1 min-w-[120px] overflow-hidden rounded-lg border shadow-lg">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => {
                onYearChange(year);
                setOpen(false);
              }}
              className={`hover:bg-accent flex w-full cursor-pointer items-center justify-between px-3 py-2 text-left text-sm transition-colors ${selectedYear === year
                ? 'text-primary font-medium'
                : 'text-foreground'
                }`}
            >
              {year === 'current' ? 'Current' : year}
              {selectedYear === year && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-primary"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Number of weeks in a full year of contributions
const WEEKS_IN_YEAR = 53;
// Rows = 7 days
//const DAYS_IN_WEEK = 7;

function ResponsiveGraph({
  contributions,
  theme,
}: {
  contributions: ContributionItem[];
  theme: string | undefined;
}) {
  const { ref, width } = useContainerWidth();

  // Calculate responsive block size based on available width
  // We subtract padding (p-4 on mobile = 32px, p-6 on desktop = 48px) and some margin for labels
  const padding = width < 500 ? 32 : 48;
  const labelSpace = width < 400 ? 0 : 28; // space for weekday labels on the left
  const availableWidth = Math.max(width - padding - labelSpace, 100);

  // Calculate block size and margin that fits all 53 weeks
  // totalWidth = WEEKS * (blockSize + blockMargin) - blockMargin
  // So: blockSize + blockMargin = availableWidth / WEEKS (approximately)
  const cellTotal = availableWidth / WEEKS_IN_YEAR;

  // Keep a ratio of ~3:1 for block:margin
  let blockMargin = Math.max(Math.floor(cellTotal / 4), 1);
  let blockSize = Math.max(Math.floor(cellTotal - blockMargin), 2);

  // Cap at reasonable max sizes
  blockSize = Math.min(blockSize, 11);
  blockMargin = Math.min(blockMargin, 4);

  // Font size scales with block size
  const fontSize = blockSize <= 4 ? 7 : blockSize <= 6 ? 8 : 10;
  const isMobile = width > 0 && width < 500;

  // Don't render until we have a width measurement
  if (width === 0) {
    return (
      <div ref={ref} className="relative w-full">
        <div className="bg-background/50 relative rounded-lg border border-dashed border-black/20 p-4 backdrop-blur-sm sm:p-6 dark:border-white/10">
          <div className="flex items-center justify-center py-8">
            <div className="border-primary mx-auto h-6 w-6 animate-spin rounded-full border-2 border-t-transparent"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="relative w-full overflow-hidden">
      <div className="bg-background/50 relative flex w-full justify-center rounded-lg border border-dashed border-black/20 p-3 backdrop-blur-sm sm:p-6 dark:border-white/10">
        <div className="flex w-full items-center justify-center overflow-x-auto">
          <ActivityCalendar
            data={contributions}
            blockSize={blockSize}
            blockMargin={blockMargin}
            fontSize={fontSize}
            colorScheme={theme === 'dark' ? 'dark' : 'light'}
            maxLevel={githubConfig.maxLevel}
            hideTotalCount={true}
            hideColorLegend={isMobile}
            hideMonthLabels={false}
            theme={githubConfig.theme}
            labels={{
              months: githubConfig.months,
              weekdays: isMobile ? ['', '', '', '', '', '', ''] : githubConfig.weekdays,
              totalCount: githubConfig.totalCountLabel,
            }}
            style={{
              color: 'rgb(139, 148, 158)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Github() {
  const [allContributions, setAllContributions] = useState<ContributionItem[]>(
    [],
  );
  const [contributions, setContributions] = useState<ContributionItem[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [selectedYear, setSelectedYear] = useState<string>('current');
  const { theme } = useTheme();

  const currentYear = new Date().getFullYear();
  // Generate years from currentYear down to the year the account started (2025)
  const availableYears = ['current'];
  for (let y = currentYear; y >= 2025; y--) {
    availableYears.push(String(y));
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `/api/github-contributions?username=${githubConfig.username}`,
        );
        // jogruber API returns: { contributions: [{date, count, level}], total: number }
        const data: {
          contributions?: { date: string; count: number; level: number }[];
          total?: number;
        } = await response.json();

        if (data?.contributions && Array.isArray(data.contributions)) {
          const validContributions = data.contributions
            .filter(
              (item) =>
                typeof item === 'object' &&
                item !== null &&
                'date' in item &&
                'count' in item &&
                'level' in item,
            )
            .map((item) => ({
              date: String(item.date),
              count: Number(item.count || 0),
              level: Math.min(
                4,
                Math.max(0, Number(item.level || 0)),
              ) as ContributionItem['level'],
            }));

          if (validContributions.length > 0) {
            setAllContributions(validContributions);

            // Default to "current" — last 365 days
            const filtered = filterLastYear(validContributions);
            setContributions(filtered);

            const total = filtered.reduce((sum, item) => sum + item.count, 0);
            setTotalContributions(total);
          } else {
            setHasError(true);
          }
        } else {
          setHasError(true);
        }
      } catch (err) {
        console.error('Failed to fetch GitHub contributions:', err);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  // When year changes, re-filter contributions
  useEffect(() => {
    if (allContributions.length === 0) return;

    let filtered: ContributionItem[];
    if (selectedYear === 'current') {
      filtered = filterLastYear(allContributions);
    } else {
      filtered = filterByYear(allContributions, Number(selectedYear));
    }

    setContributions(filtered);
    const total = filtered.reduce((sum, item) => sum + item.count, 0);
    setTotalContributions(total);
  }, [selectedYear, allContributions]);

  return (
    <Container className="mt-20">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-foreground text-2xl font-bold">
              {githubConfig.title}
            </h2>
            <p className="text-muted-foreground text-sm">
              <b>{githubConfig.username}</b>&apos;s {githubConfig.subtitle}
            </p>
            {!isLoading && !hasError && totalContributions > 0 && (
              <p className="text-primary mt-1 text-sm font-medium">
                Total:{' '}
                <span className="font-black">
                  {totalContributions.toLocaleString()}
                </span>{' '}
                contributions
                {selectedYear !== 'current' && ` in ${selectedYear}`}
              </p>
            )}
          </div>

          {/* Year Selector */}
          {!isLoading && !hasError && (
            <YearSelector
              selectedYear={selectedYear}
              onYearChange={setSelectedYear}
              years={availableYears}
            />
          )}
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="border-primary mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-t-transparent"></div>
              <p className="text-muted-foreground text-sm">
                {githubConfig.loadingState.description}
              </p>
            </div>
          </div>
        ) : hasError || contributions.length === 0 ? (
          <div className="text-muted-foreground border-border rounded-xl border-2 border-dashed p-8 text-center">
            <div className="bg-muted mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <GithubIcon className="h-8 w-8" />
            </div>
            <p className="mb-2 font-medium">{githubConfig.errorState.title}</p>
            <p className="mb-4 text-sm">
              {githubConfig.errorState.description}
            </p>
            <Button variant="outline" asChild>
              <Link
                href={`https://github.com/${githubConfig.username}`}
                className="inline-flex items-center gap-2"
              >
                <GithubIcon className="h-4 w-4" />
                {githubConfig.errorState.buttonText}
              </Link>
            </Button>
          </div>
        ) : (
          <ResponsiveGraph
            contributions={contributions}
            theme={theme}
          />
        )}
      </div>
    </Container>
  );
}
