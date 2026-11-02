/** Mock hourly forecast 07:00–18:00 (prototype: details.js → weatherFor). Replace with the weather API. */
export interface WeatherHour {
  hour: number;
  icon: 'sun' | 'partly' | 'cloud' | 'rain';
  temp: number;
}

export function weatherFor(date: string): WeatherHour[] {
  const seed = +date.slice(8, 10) + +date.slice(5, 7);
  return Array.from({ length: 12 }, (_, i) => {
    const k = (seed + i * 3) % 10;
    const icon = k < 4 ? 'sun' : k < 7 ? 'partly' : k < 9 ? 'cloud' : 'rain';
    return {
      hour: 7 + i,
      icon,
      temp: 12 + Math.round(4 * Math.sin((i / 11) * Math.PI)) + (seed % 3),
    };
  });
}
