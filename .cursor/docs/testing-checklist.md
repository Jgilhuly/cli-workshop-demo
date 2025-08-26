# Testing Checklist - IT Service Desk Portal

## 🧪 Manual Testing Guide

This checklist covers all critical user flows and functionality. Run these tests before demos or after major changes.

## Prerequisites
1. Database seeded with demo data: `npm run db:seed`
2. Development server running: `npm run dev`
3. Application accessible at: http://localhost:3000

## Test Accounts
- **End User**: `user@company.com` / `password123`
- **Admin**: `admin@company.com` / `admin123`

---

## 🔐 Authentication & Authorization Tests

### Login Flow
- [ ] **Test 1.1**: Successfully login with end user credentials
- [ ] **Test 1.2**: Successfully login with admin credentials  
- [ ] **Test 1.3**: Login fails with invalid credentials
- [ ] **Test 1.4**: Error message displays for failed login
- [ ] **Test 1.5**: Toast notification appears for successful login
- [ ] **Test 1.6**: Toast notification appears for failed login

### Role-Based Access Control (RBAC)
- [ ] **Test 2.1**: End user can only see their own tickets
- [ ] **Test 2.2**: Admin can see all tickets
- [ ] **Test 2.3**: End user cannot access user management page
- [ ] **Test 2.4**: Admin can access user management page
- [ ] **Test 2.5**: End user cannot assign tickets to others
- [ ] **Test 2.6**: Admin can assign tickets

### Logout
- [ ] **Test 3.1**: Logout button works correctly
- [ ] **Test 3.2**: Toast notification appears on logout
- [ ] **Test 3.3**: User is redirected to login page after logout

---

## 🎫 Ticket Management Tests

### Ticket Creation (End User)
- [ ] **Test 4.1**: Can access ticket creation dialog
- [ ] **Test 4.2**: Form validation works (empty title)
- [ ] **Test 4.3**: Form validation works (description too short)
- [ ] **Test 4.4**: Can select priority levels
- [ ] **Test 4.5**: Can select categories
- [ ] **Test 4.6**: Successfully create ticket
- [ ] **Test 4.7**: Toast notification on successful creation
- [ ] **Test 4.8**: Form resets after successful submission
- [ ] **Test 4.9**: Dialog closes after successful submission

### Ticket Management (Admin)
- [ ] **Test 5.1**: Can view all tickets in system
- [ ] **Test 5.2**: Can update ticket status
- [ ] **Test 5.3**: Toast notification on status update
- [ ] **Test 5.4**: Can assign tickets to admin users
- [ ] **Test 5.5**: Toast notification on ticket assignment
- [ ] **Test 5.6**: Cannot assign tickets to end users
- [ ] **Test 5.7**: Status colors display correctly
- [ ] **Test 5.8**: Priority colors display correctly

### Ticket List Display
- [ ] **Test 6.1**: Loading skeleton appears while loading
- [ ] **Test 6.2**: Tickets display with correct formatting
- [ ] **Test 6.3**: Date formatting is user-friendly
- [ ] **Test 6.4**: Empty state shows when no tickets
- [ ] **Test 6.5**: Error toast appears if loading fails

---

## 🖥️ Asset Management Tests

### Asset Creation (Admin)
- [ ] **Test 7.1**: Can access asset creation dialog
- [ ] **Test 7.2**: Form validation works (empty name)
- [ ] **Test 7.3**: Can select asset types
- [ ] **Test 7.4**: Serial number is optional
- [ ] **Test 7.5**: Purchase date is optional
- [ ] **Test 7.6**: Successfully create asset
- [ ] **Test 7.7**: Toast notification on successful creation
- [ ] **Test 7.8**: Cannot create asset with duplicate serial number

### Asset Management
- [ ] **Test 8.1**: Can view all assets
- [ ] **Test 8.2**: Can update asset status
- [ ] **Test 8.3**: Toast notification on status update
- [ ] **Test 8.4**: Can assign assets to users
- [ ] **Test 8.5**: Toast notification on asset assignment
- [ ] **Test 8.6**: Status automatically updates when assigned
- [ ] **Test 8.7**: Can unassign assets
- [ ] **Test 8.8**: Status colors display correctly

### Asset List Display
- [ ] **Test 9.1**: Loading skeleton appears while loading
- [ ] **Test 9.2**: Assets display with correct information
- [ ] **Test 9.3**: Assigned user information shows correctly
- [ ] **Test 9.4**: Empty state shows when no assets
- [ ] **Test 9.5**: Error toast appears if loading fails

---

## 👥 User Management Tests (Admin Only)

### User Creation
- [ ] **Test 10.1**: Can access user creation dialog
- [ ] **Test 10.2**: Email validation works
- [ ] **Test 10.3**: Password requirements enforced
- [ ] **Test 10.4**: Can select user roles
- [ ] **Test 10.5**: Successfully create user
- [ ] **Test 10.6**: Toast notification on successful creation
- [ ] **Test 10.7**: Cannot create user with duplicate email

### User Management
- [ ] **Test 11.1**: Can view all users
- [ ] **Test 11.2**: Can update user roles
- [ ] **Test 11.3**: Toast notification on role update
- [ ] **Test 11.4**: User statistics display correctly
- [ ] **Test 11.5**: Role colors display correctly

---

## 📊 Dashboard Tests

### Statistics Display
- [ ] **Test 12.1**: Loading skeleton appears while loading
- [ ] **Test 12.2**: Statistics calculate correctly
- [ ] **Test 12.3**: Statistics update after creating tickets/assets
- [ ] **Test 12.4**: Error toast appears if loading fails
- [ ] **Test 12.5**: Different stats for end users vs admins

### Quick Actions
- [ ] **Test 13.1**: Create ticket button works
- [ ] **Test 13.2**: Navigation links work correctly
- [ ] **Test 13.3**: Role-appropriate actions show

---

## 🎨 UI/UX Tests

### Loading States
- [ ] **Test 14.1**: All lists show skeleton loading
- [ ] **Test 14.2**: Dashboard stats show skeleton loading
- [ ] **Test 14.3**: Forms show loading state during submission
- [ ] **Test 14.4**: Buttons disable during submission

### Toast Notifications
- [ ] **Test 15.1**: Success notifications appear and auto-dismiss
- [ ] **Test 15.2**: Error notifications appear and auto-dismiss
- [ ] **Test 15.3**: Loading notifications work correctly
- [ ] **Test 15.4**: Multiple notifications stack properly
- [ ] **Test 15.5**: Notifications can be manually dismissed

### Form Validation
- [ ] **Test 16.1**: Real-time validation shows errors
- [ ] **Test 16.2**: Error messages are user-friendly
- [ ] **Test 16.3**: Errors clear when user starts typing
- [ ] **Test 16.4**: Form submission disabled when invalid
- [ ] **Test 16.5**: Success feedback after submission

### Responsive Design
- [ ] **Test 17.1**: Application works on desktop
- [ ] **Test 17.2**: Application works on tablet
- [ ] **Test 17.3**: Application works on mobile
- [ ] **Test 17.4**: Navigation adapts to screen size
- [ ] **Test 17.5**: Forms are usable on small screens

---

## 🔒 Security & Validation Tests

### Server-Side Validation
- [ ] **Test 18.1**: Server rejects invalid ticket data
- [ ] **Test 18.2**: Server rejects invalid asset data
- [ ] **Test 18.3**: Server rejects invalid user data
- [ ] **Test 18.4**: Rate limiting prevents spam requests
- [ ] **Test 18.5**: Proper error messages for validation failures

### Data Integrity
- [ ] **Test 19.1**: Cannot assign tickets to non-existent users
- [ ] **Test 19.2**: Cannot assign assets to non-existent users
- [ ] **Test 19.3**: Cannot create duplicate serial numbers
- [ ] **Test 19.4**: Cannot create duplicate email addresses
- [ ] **Test 19.5**: Foreign key constraints are enforced

---

## 🎯 Demo-Specific Tests

### Demo Data
- [ ] **Test 20.1**: Seeded data loads correctly
- [ ] **Test 20.2**: Demo scenarios work as expected
- [ ] **Test 20.3**: Different user roles show different data
- [ ] **Test 20.4**: Sample tickets cover various scenarios
- [ ] **Test 20.5**: Sample assets represent typical inventory

### Performance
- [ ] **Test 21.1**: Page load times are reasonable
- [ ] **Test 21.2**: Form submissions are responsive
- [ ] **Test 21.3**: Large lists load efficiently
- [ ] **Test 21.4**: No console errors in browser
- [ ] **Test 21.5**: No TypeScript compilation errors

---

## 🐛 Error Handling Tests

### Network Errors
- [ ] **Test 22.1**: Graceful handling when server is down
- [ ] **Test 22.2**: Proper error messages for failed requests
- [ ] **Test 22.3**: Retry mechanisms work where appropriate
- [ ] **Test 22.4**: Loading states end even on errors

### Edge Cases
- [ ] **Test 23.1**: Very long ticket titles/descriptions
- [ ] **Test 23.2**: Special characters in form fields
- [ ] **Test 23.3**: Empty database states
- [ ] **Test 23.4**: Browser back/forward navigation
- [ ] **Test 23.5**: Page refresh maintains state where appropriate

---

## ✅ Test Results Summary

**Date Tested**: ___________  
**Tester**: _______________  
**Environment**: ___________

### Pass/Fail Summary
- Authentication Tests: ___/9 passed
- Ticket Management: ___/15 passed  
- Asset Management: ___/13 passed
- User Management: ___/7 passed
- Dashboard Tests: ___/5 passed
- UI/UX Tests: ___/17 passed
- Security Tests: ___/10 passed
- Demo Tests: ___/5 passed
- Error Handling: ___/9 passed

**Total**: ___/90 tests passed

### Critical Issues Found
1. ________________________________
2. ________________________________
3. ________________________________

### Recommendations
1. ________________________________
2. ________________________________
3. ________________________________

---

## 🚀 Pre-Demo Checklist

Before any live demonstration:

- [ ] All critical path tests passing
- [ ] Demo data seeded and verified
- [ ] Application running without console errors
- [ ] Authentication working for both user types
- [ ] Key features demonstrated work flawlessly
- [ ] Backup plan ready if technical issues occur
- [ ] Browser bookmarks set for quick navigation
- [ ] Demo script reviewed and practiced

**Demo readiness**: ☐ Ready ☐ Needs attention
