// The RailCom decoder index: the feature columns, in display order,
// and the values a cell may hold. The data is src/data/decoders.yaml;
// the schema in src/content.config.ts is built from these lists so
// that a new column is added here and nowhere else.

// A feature is present, absent, or not yet established.
export const FEATURE_STATES = ['yes', 'no', 'tbd'] as const;
export type FeatureState = (typeof FEATURE_STATES)[number];

// Where a row's facts come from: the maker's documentation, our own
// tests, or both. A row with no source yet is marked tbd.
export const SOURCES = ['maker', 'test', 'both', 'tbd'] as const;
export type Source = (typeof SOURCES)[number];

// Column groups, in display order; the table's first header row.
export const GROUPS = ['Replies', 'Live values', 'Options'] as const;
export type Group = (typeof GROUPS)[number];

// Columns of the table, in order, grouped. The key is used in
// decoders.yaml; `short` is the column heading, `label` the full
// name (in the heading's title and the legend), `note` the legend.
export const FEATURES = [
  { key: 'ch1', group: 'Replies', short: 'Ch 1', label: 'Address (channel 1)', note: 'Broadcasts its address in channel 1' },
  { key: 'pom', group: 'Replies', short: 'POM', label: 'CV read (POM)', note: 'Answers a CV read on the main in channel 2' },
  { key: 'xpom', group: 'Replies', short: 'XPOM', label: 'XPOM', note: 'Four CVs in one exchange' },
  { key: 'dcca', group: 'Replies', short: 'DCC-A', label: 'DCC-A', note: 'Automatic logon per RCN-218' },
  { key: 'search', group: 'Replies', short: 'Search', label: 'Track search', note: 'Answers the on-track search after a power cut' },
  { key: 'speed', group: 'Live values', short: 'Speed', label: 'Speed', note: 'Reports real speed' },
  { key: 'load', group: 'Live values', short: 'Load', label: 'Load', note: 'Reports motor load' },
  { key: 'temp', group: 'Live values', short: 'Temp', label: 'Temperature', note: 'Reports its temperature' },
  { key: 'volts', group: 'Live values', short: 'Volts', label: 'Track voltage', note: 'Reports the track voltage it sees' },
  { key: 'fuel', group: 'Live values', short: 'Fuel', label: 'Fuel', note: 'Reports container (fuel, water, sand) levels' },
  { key: 'stats', group: 'Live values', short: 'QoS', label: 'Reception statistics', note: 'Reports the share of packets it missed' },
  { key: 'dir', group: 'Live values', short: 'Dir', label: 'Direction', note: 'Reports its direction state' },
  { key: 'hicur', group: 'Options', short: 'Hi-I', label: 'High current', note: 'High-current RailCom option' },
] as const;

export type FeatureKey = (typeof FEATURES)[number]['key'];
export const FEATURE_KEYS = FEATURES.map((f) => f.key) as [FeatureKey, ...FeatureKey[]];

// How each state and source is shown: a symbol for the eye and a
// word for screen readers, copy-paste and no-colour reading.
export const STATE_SYMBOL: Record<FeatureState, string> = { yes: '✓', no: '✗', tbd: '?' };
export const STATE_TEXT: Record<FeatureState, string> = { yes: 'Yes', no: 'No', tbd: 'TBD' };
export const SOURCE_SYMBOL: Record<Source, string> = { maker: 'M', test: 'T', both: 'B', tbd: '?' };
export const SOURCE_TEXT: Record<Source, string> = {
  maker: 'Maker',
  test: 'Test',
  both: 'Both',
  tbd: 'TBD',
};
