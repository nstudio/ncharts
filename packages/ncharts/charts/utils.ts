/**
 * Shared utility functions for chart implementations
 */
import { parseColor } from '../common';
import type { ChartColor } from '../types';

// ============================================================================
// Color Conversion Utilities
// ============================================================================

/**
 * Convert a color value to iOS UIColor
 */
export function toUIColor(color: ChartColor | undefined): UIColor | undefined {
  if (color === undefined || color === null) return undefined;
  const c = parseColor(color);
  return c?.ios;
}

/**
 * Convert a color value to Android color integer
 */
export function toAndroidColor(color: ChartColor | undefined): number | undefined {
  if (color === undefined || color === null) return undefined;
  const c = parseColor(color);
  return c?.android;
}

// ============================================================================
// iOS Easing Options
// ============================================================================

/**
 * Easing option map for iOS ChartEasingOption enum
 */
const EASING_MAP_IOS: Record<string, number> = {
  Linear: 0,
  EaseInQuad: 1,
  EaseOutQuad: 2,
  EaseInOutQuad: 3,
  EaseInCubic: 4,
  EaseOutCubic: 5,
  EaseInOutCubic: 6,
  EaseInQuart: 7,
  EaseOutQuart: 8,
  EaseInOutQuart: 9,
  EaseInQuint: 10,
  EaseOutQuint: 11,
  EaseInOutQuint: 12,
  EaseInSine: 13,
  EaseOutSine: 14,
  EaseInOutSine: 15,
  EaseInExpo: 16,
  EaseOutExpo: 17,
  EaseInOutExpo: 18,
  EaseInCirc: 19,
  EaseOutCirc: 20,
  EaseInOutCirc: 21,
  EaseInElastic: 22,
  EaseOutElastic: 23,
  EaseInOutElastic: 24,
  EaseInBack: 25,
  EaseOutBack: 26,
  EaseInOutBack: 27,
  EaseInBounce: 28,
  EaseOutBounce: 29,
  EaseInOutBounce: 30,
};

/**
 * Parse easing string to ChartEasingOption enum value for iOS
 */
export function parseEasingIOS(easing: string): number {
  return EASING_MAP_IOS[easing] ?? 0;
}

// ============================================================================
// Chart Mode Parsers (iOS)
// ============================================================================

/**
 * Parse line chart mode string to iOS enum value
 */
export function parseLineChartModeIOS(mode: string): number {
  const map: Record<string, number> = {
    LINEAR: 0,
    STEPPED: 1,
    CUBIC_BEZIER: 2,
    HORIZONTAL_BEZIER: 3,
  };
  return map[mode] ?? 0;
}

/**
 * Parse scatter shape string to iOS enum value
 */
export function parseScatterShapeIOS(shape: string): number {
  const map: Record<string, number> = {
    SQUARE: 0,
    CIRCLE: 1,
    TRIANGLE: 2,
    CROSS: 3,
    X: 4,
  };
  return map[shape] ?? 0;
}
