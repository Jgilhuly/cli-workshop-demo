import { toast } from "sonner"

export const notifications = {
  success: (message: string, description?: string) => {
    toast.success(message, { description })
  },
  error: (message: string, description?: string) => {
    toast.error(message, { description })
  },
  info: (message: string, description?: string) => {
    toast.info(message, { description })
  },
  warning: (message: string, description?: string) => {
    toast.warning(message, { description })
  },
  loading: (message: string) => {
    return toast.loading(message)
  },
  dismiss: (id: string | number) => {
    toast.dismiss(id)
  },
}

// Common notification messages
export const NOTIFICATION_MESSAGES = {
  TICKET_CREATED: 'Ticket created successfully',
  TICKET_UPDATED: 'Ticket updated successfully', 
  TICKET_ASSIGNED: 'Ticket assigned successfully',
  TICKET_ERROR: 'Failed to update ticket',
  
  ASSET_CREATED: 'Asset created successfully',
  ASSET_UPDATED: 'Asset updated successfully',
  ASSET_ASSIGNED: 'Asset assigned successfully', 
  ASSET_ERROR: 'Failed to update asset',
  
  USER_CREATED: 'User created successfully',
  USER_UPDATED: 'User updated successfully',
  USER_ERROR: 'Failed to update user',
  
  LOGIN_ERROR: 'Invalid email or password',
  LOGIN_SUCCESS: 'Successfully logged in',
  LOGOUT_SUCCESS: 'Successfully logged out',
  
  GENERIC_ERROR: 'An error occurred. Please try again.',
  LOADING: 'Loading...',
} as const
