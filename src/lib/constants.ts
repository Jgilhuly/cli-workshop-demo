export const PRIORITIES = [
  { value: 'LOW', labelKey: 'priorityLow' as const, color: 'bg-green-100 text-green-800' },
  { value: 'MEDIUM', labelKey: 'priorityMedium' as const, color: 'bg-yellow-100 text-yellow-800' },
  { value: 'HIGH', labelKey: 'priorityHigh' as const, color: 'bg-orange-100 text-orange-800' },
  { value: 'CRITICAL', labelKey: 'priorityCritical' as const, color: 'bg-red-100 text-red-800' },
] as const

export const getPriorities = () => {
  return PRIORITIES.map(priority => ({
    ...priority,
    label: priority.value.charAt(0) + priority.value.slice(1).toLowerCase()
  }))
}

export const TICKET_STATUSES = [
  { value: 'OPEN', labelKey: 'statusOpen' as const, color: 'bg-blue-100 text-blue-800' },
  { value: 'IN_PROGRESS', labelKey: 'statusInProgress' as const, color: 'bg-yellow-100 text-yellow-800' },
  { value: 'RESOLVED', labelKey: 'statusResolved' as const, color: 'bg-green-100 text-green-800' },
  { value: 'CLOSED', labelKey: 'statusClosed' as const, color: 'bg-gray-100 text-gray-800' },
] as const

export const getTicketStatuses = () => {
  return TICKET_STATUSES.map(status => ({
    ...status,
    label: status.value.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, c => c.toUpperCase())
  }))
}

export const ASSET_STATUSES = [
  { value: 'AVAILABLE', labelKey: 'statusAvailable' as const, color: 'bg-green-100 text-green-800' },
  { value: 'ASSIGNED', labelKey: 'statusAssigned' as const, color: 'bg-blue-100 text-blue-800' },
  { value: 'UNDER_MAINTENANCE', labelKey: 'statusUnderMaintenance' as const, color: 'bg-yellow-100 text-yellow-800' },
  { value: 'RETIRED', labelKey: 'statusRetired' as const, color: 'bg-gray-100 text-gray-800' },
] as const

export const getAssetStatuses = () => {
  return ASSET_STATUSES.map(status => ({
    ...status,
    label: status.value.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, c => c.toUpperCase())
  }))
}

export const TICKET_CATEGORIES = [
  { value: 'HARDWARE', labelKey: 'categoryHardware' as const },
  { value: 'SOFTWARE', labelKey: 'categorySoftware' as const },
  { value: 'NETWORK', labelKey: 'categoryNetwork' as const },
  { value: 'ACCESS', labelKey: 'categoryAccess' as const },
  { value: 'OTHER', labelKey: 'categoryOther' as const },
] as const

export const getTicketCategories = () => {
  return TICKET_CATEGORIES.map(category => ({
    ...category,
    label: category.value.charAt(0) + category.value.slice(1).toLowerCase()
  }))
}

export const ASSET_TYPES = [
  { value: 'COMPUTER', labelKey: 'typeComputer' as const },
  { value: 'MONITOR', labelKey: 'typeMonitor' as const },
  { value: 'KEYBOARD', labelKey: 'typeKeyboard' as const },
  { value: 'MOUSE', labelKey: 'typeMouse' as const },
  { value: 'NETWORK_EQUIPMENT', labelKey: 'typeNetworkEquipment' as const },
  { value: 'PRINTER', labelKey: 'typePrinter' as const },
  { value: 'OTHER', labelKey: 'typeOther' as const },
] as const

export const getAssetTypes = () => {
  return ASSET_TYPES.map(type => ({
    ...type,
    label: type.value.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, c => c.toUpperCase())
  }))
}
