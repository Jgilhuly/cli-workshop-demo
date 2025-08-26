# IT Service Desk & Asset Management Portal

A comprehensive IT Service Desk and Asset Management portal built with Next.js 14+, TypeScript, and Prisma. Perfect for demonstrations, live coding sessions, and as a foundation for enterprise IT service management systems.

## ✨ Features

### Phase 1 ✅ COMPLETED
- **Project Setup**: Next.js 14+ with TypeScript, Tailwind CSS, and shadcn/ui
- **Database & ORM**: SQLite with Prisma ORM (for demo simplicity)
- **Authentication**: Fake authentication system with role-based access control
- **Basic Infrastructure**: Layout components, routing, and utility functions

### Phase 2 ✅ COMPLETED
- **Ticket Management System**: Create, view, update, and assign support tickets
- **Asset Management System**: Track hardware and software assets with assignment
- **User Management**: Role-based access control and user operations
- **Dashboard & Navigation**: Real-time statistics and quick actions

### Phase 3 ✅ COMPLETED
- **UI/UX Improvements**: Loading skeletons, toast notifications, improved styling
- **Data Validation & Error Handling**: Server-side validation, input sanitization, rate limiting
- **Code Quality**: Comprehensive TypeScript types, reusable utilities, custom hooks

### Phase 4 ✅ COMPLETED
- **Demo Data & Scenarios**: Realistic sample data with seeding scripts
- **Documentation & Setup**: Comprehensive guides and demo scenarios
- **Testing & Quality Assurance**: Manual testing coverage and validation

## Tech Stack

- **Frontend**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Database**: SQLite (for demo simplicity)
- **ORM**: Prisma
- **Authentication**: Fake auth with hardcoded credentials
- **State Management**: Server components + React hooks
- **Containerization**: Docker Compose

## Demo Credentials

- **End User**: `user@company.com` / `password123`
- **Admin**: `admin@company.com` / `admin123`

## Quick Start

### Prerequisites
- Node.js 18+ 
- Docker and Docker Compose
- npm or yarn

### 1. Clone and Install Dependencies
```bash
git clone <repository-url>
cd it-service-desk
npm install
```

### 2. Setup Database
```bash
npm run db:generate
npm run db:push
```

### 3. Start Development Server
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:ci` - Run ESLint with no warnings allowed

### Database
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push database schema changes
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio
- `npm run db:seed` - Seed database with full demo data
- `npm run db:seed:minimal` - Seed only basic auth users
- `npm run db:seed:reset` - Clear all data from database

### Docker
- `npm run docker:up` - Start Docker containers
- `npm run docker:down` - Stop Docker containers

## Project Structure

```
/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── (auth)/            # Authentication routes
│   │   ├── dashboard/         # Dashboard page
│   │   ├── tickets/           # Ticket management
│   │   ├── assets/            # Asset management
│   │   └── users/             # User management (admin only)
│   ├── components/            # Reusable UI components
│   │   ├── auth/              # Authentication components
│   │   ├── layout/            # Layout components
│   │   └── ui/                # shadcn/ui components
│   ├── contexts/              # React contexts
│   └── lib/                   # Utilities and configurations
├── prisma/                    # Database schema and migrations
├── docker-compose.yml         # Database container
└── README.md                  # This file
```

## Database Schema

The application uses 5 main tables:
- **users**: User accounts with role-based access
- **tickets**: Support tickets with status workflow
- **assets**: Hardware inventory tracking
- **software_licenses**: Software license management
- **categories**: Categorization system

## Development

### Adding New Components
```bash
npx shadcn@latest add <component-name>
```

### Database Changes
1. Update `prisma/schema.prisma`
2. Run `npm run db:push` for development
3. Run `npm run db:migrate` for production

### Authentication
The current system uses fake authentication with hardcoded credentials. In production, this should be replaced with a proper authentication provider like NextAuth.js or Auth0.

## 🎯 Demo Scenarios

This application is designed for live demonstrations and workshops. Here are some suggested demo scenarios:

### 1. Current System Showcase (5-10 minutes)
- **Login Flow**: Demonstrate both user roles (`user@company.com` / `password123` and `admin@company.com` / `admin123`)
- **Dashboard**: Show real-time statistics and quick actions
- **Ticket Management**: Create tickets, assign them, update statuses
- **Asset Management**: View inventory, assign assets to users
- **Role-based Access**: Show different views for end users vs admins

### 2. UI/UX Improvements (10 minutes)
**What to show:**
- Modern loading skeletons instead of basic text
- Toast notifications for all user actions
- Improved form validation with real-time feedback
- Better error handling and user-friendly messages

**Live improvements you could add:**
- Add a dark mode toggle
- Implement search functionality
- Add bulk operations for tickets/assets
- Create advanced filtering options

### 3. Code Quality Enhancements (10 minutes)
**What to show:**
- Comprehensive TypeScript types (`src/lib/types.ts`)
- Server-side validation and sanitization (`src/lib/validation.ts`)
- Reusable utility functions (`src/lib/utils-extended.ts`)
- Custom React hooks (`src/lib/hooks.ts`)
- Rate limiting and security measures

**Live improvements you could add:**
- Add unit tests for critical functions
- Implement API rate limiting middleware
- Add audit logging for all actions
- Create error boundaries for better error handling

### 4. Data Management & Demo Scenarios (5 minutes)
**What to show:**
- Rich demo data with realistic IT scenarios
- Database seeding scripts for quick setup
- Multiple user personas with different needs

**Available demo data:**
- 10 users (mix of end users and admins)
- 10 tickets covering common IT issues
- 12 assets including computers, monitors, printers
- 5 software licenses with expiry tracking

### 5. Architecture & Scalability Discussion (10 minutes)
**What to highlight:**
- Modern Next.js 14 with App Router
- Type-safe database operations with Prisma
- Scalable component architecture with shadcn/ui
- Server actions for seamless client-server communication

### 6. Quick Development Setup (2 minutes)
**For live coding sessions:**
```bash
# Clone and setup
npm install
npm run db:generate
npm run db:push
npm run db:seed
npm run dev
```

## 🚀 Live Demo Improvements

Areas intentionally left simple for live enhancement during demos:

### Easy Wins (5-10 minutes each)
- **Add Search**: Implement search functionality across tickets/assets
- **Table Sorting**: Add clickable column headers for sorting
- **Export Data**: Add CSV export functionality
- **Bulk Actions**: Select multiple items for bulk operations
- **Dashboard Charts**: Add simple charts for statistics visualization

### Medium Complexity (15-20 minutes each)
- **Advanced Filters**: Multi-criteria filtering with date ranges
- **File Attachments**: Add file upload to tickets
- **Email Notifications**: Send updates via email
- **Audit Trail**: Track all changes to tickets and assets
- **API Integration**: Connect with external systems

### Advanced Features (30+ minutes each)
- **Real-time Updates**: WebSocket integration for live updates
- **Mobile App**: React Native companion app
- **Reporting Dashboard**: Advanced analytics and reporting
- **Multi-tenant Support**: Support multiple organizations
- **SSO Integration**: Enterprise authentication integration

## 🔧 Development Tips

### For Workshops and Teaching
1. **Start with the basics** - Show the core functionality first
2. **Progressive enhancement** - Add features incrementally
3. **Explain the why** - Discuss architectural decisions
4. **Live coding** - Make changes while explaining
5. **Interactive elements** - Let attendees suggest improvements

### Demo Data Management
```bash
# Reset and reseed for consistent demos
npm run db:seed:reset
npm run db:seed

# Quick minimal setup for development
npm run db:seed:minimal
```

### Code Organization
- **Components**: Well-structured, reusable UI components
- **Actions**: Server actions following best practices
- **Types**: Comprehensive TypeScript definitions
- **Utils**: Helper functions and custom hooks
- **Validation**: Robust input validation and sanitization

## 🐛 Troubleshooting

### Common Issues

**Database Connection Issues:**
```bash
# Regenerate Prisma client
npm run db:generate

# Reset database
npm run db:push --force-reset
npm run db:seed
```

**Missing Demo Data:**
```bash
# Reseed the database
npm run db:seed:reset
npm run db:seed
```

**Port Already in Use:**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- --port 3001
```

**TypeScript Errors:**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Performance Notes
- The application uses SQLite for demo simplicity
- For production, consider PostgreSQL or MySQL
- Demo data is designed to be lightweight for fast setup

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- JavaScript enabled required
- Local storage support needed for authentication

---

## 📄 License

This project is for demonstration purposes. Feel free to use it as a foundation for your own projects.

## 🤝 Contributing

This is a demo project, but feedback and suggestions are welcome! Feel free to:
- Report bugs or issues
- Suggest new demo scenarios  
- Propose architectural improvements
- Share your workshop experiences

---

**Perfect for:** Live coding sessions, technical interviews, architecture discussions, workshops, and as a foundation for real IT service management systems.
