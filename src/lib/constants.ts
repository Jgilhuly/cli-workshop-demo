export const PRIORITIES = [
  { value: 'LOW', label: 'Low', color: 'bg-green-100 text-green-800' },
  { value: 'MEDIUM', label: 'Medium', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'HIGH', label: 'High', color: 'bg-orange-100 text-orange-800' },
  { value: 'CRITICAL', label: 'Critical', color: 'bg-red-100 text-red-800' },
] as const

export const TICKET_STATUSES = [
  { value: 'OPEN', label: 'Open', color: 'bg-blue-100 text-blue-800' },
  { value: 'IN_PROGRESS', label: 'In Progress', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'RESOLVED', label: 'Resolved', color: 'bg-green-100 text-green-800' },
  { value: 'CLOSED', label: 'Closed', color: 'bg-gray-100 text-gray-800' },
] as const

export const ASSET_STATUSES = [
  { value: 'AVAILABLE', label: 'Available', color: 'bg-green-100 text-green-800' },
  { value: 'ASSIGNED', label: 'Assigned', color: 'bg-blue-100 text-blue-800' },
  { value: 'UNDER_MAINTENANCE', label: 'Under Maintenance', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'RETIRED', label: 'Retired', color: 'bg-gray-100 text-gray-800' },
] as const

export const TICKET_CATEGORIES = [
  'Hardware',
  'Software',
  'Network',
  'Access',
  'Other',
] as const

export const ASSET_TYPES = [
  'Computer',
  'Monitor',
  'Keyboard',
  'Mouse',
  'Network Equipment',
  'Printer',
  'Other',
] as const
