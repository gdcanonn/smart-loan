# SmartLoan - Loan Management System

A modern loan management system built with Next.js 14, React, TypeScript, and Tailwind CSS. The application features a responsive design with dark mode support and internationalization (English and Spanish).

## Project Structure

### Pages

- **Home** (`/`): Landing page with hero section, features, and loan types
- **Dashboard** (`/dashboard`): Client management and loan statistics
- **Services** (`/services`): Available loan services and categories
- **Contact** (`/contact`): Contact form and company information

### Key Features

#### Components

- **Reusable Components**:
  - `FormInput`: Reusable form input component with validation
  - `ServiceCard`: Display service information
  - `LoanCard`: Display loan type information
  - `ContactInfoItem`: Contact information display
  - `TableHeader` & `TableCell`: Reusable table components

#### State Management & Data Fetching

- **React Query**: Used for efficient data fetching and caching
- **TypeScript Interfaces**: Strong typing for all components and data structures
- **Custom Hooks**:
  - `useTranslations`: Internationalization hook
  - Various data fetching hooks

#### Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Dark Mode Support**: System-based theme switching
- **Responsive Design**: Mobile-first approach

#### Testing

- **Jest & React Testing Library**: Unit testing setup
- **Test Coverage**: Components and utilities testing
- **Test Location**: `__tests__` directory

#### Internationalization

- Support for multiple languages (English & Spanish)
- Language switching without page reload
- Translations for all UI elements

## Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks & Context
- **Data Fetching**: React Query
- **Testing**: Jest & React Testing Library
- **Internationalization**: Custom i18n implementation
- **Code Quality**: ESLint & Prettier

## Getting Started

1. Clone the repository:

```bash
git clone git@github.com:gdcanonn/smart-loan.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Run tests:

```bash
npm test
```

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # React components
│   ├── common/         # Shared components
│   ├── contact/        # Contact page components
│   ├── dashboard/      # Dashboard components
│   ├── home/          # Home page components
│   ├── layout/        # Layout components
│   └── services/      # Services page components
├── utils/             # Utility functions
├── hooks/             # Custom React hooks
├── types/             # TypeScript types/interfaces
├── translations/      # i18n translation files
└── __tests__/        # Test files
```

## Performance Optimizations

- Component memoization with `useMemo` and `useCallback`
- Image optimization with Next.js Image component
- Client-side components marked with "use client"
- Efficient data fetching with React Query

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
