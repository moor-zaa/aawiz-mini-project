# AAWIZ - Product & User Management Dashboard

A responsive dashboard application built with Next.js 16, React 19, and TypeScript for showing products and users with a clean and intuitive interface.

## 🚀 Features

- **Product Management**: Browse and manage product listings with images, ratings, prices, and return policies
- **User Management**: View and manage top users with information
- **Responsive Design**: Fully responsive layout that works seamlessly across mobile, tablet, and desktop devices
- **UI Components**: Custom-built reusable components including cards, buttons, icons, and navigation
- **Form Validation**: Integrated form handling with React Hook Form and Zod schema validation
- **SEO Optimized**: Proper metadata and SEO implementation for better search engine visibility
- **Type Safety**: Full TypeScript implementation for type-safe development

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.3
- **React**: 19.2.0
- **TypeScript**: ^5
- **Styling**: Tailwind CSS v4 with PostCSS
- **Form Management**: React Hook Form ^7.66.1
- **Validation**: Zod ^4.1.13
- **HTTP Client**: Axios ^1.13.2
- **Icons**: Material Symbols ^0.40.0
- **Linting**: ESLint with Next.js config

## 📁 Project Structure
```
aawiz/
├── app/
│   ├── dashboard/
│   │   └── page.tsx
│   ├── providers/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── button/
│   │   ├── button.component.tsx
│   │   └── button.type.ts
│   ├── card/
│   ├── icon/
│   ├── input/
│   │   ├── input.component.tsx
│   │   └── input.styles.ts
│   └── navbar/
│       └── navbar.component.tsx
├── features/
│   ├── intro/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── schema/
│   │   │   └── intro.schema.ts
│   │   └── intro.page.tsx
│   ├── product/
│   │   ├── api/
│   │   ├── components/
│   │   │   └── product-card/
│   │   │       └── product-card.component.tsx
│   │   ├── dto/
│   │   ├── hooks/
│   │   └── product.component.tsx
│   └── user/
│       ├── api/
│       ├── components/
│       │   └── user-cards/
│       │       └── user-card.component.tsx
│       ├── dto/
│       ├── hooks/
│       └── users.component.tsx
├── lib/
│   └── utils.ts
└── services/
    └── http-client.service.ts
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/aawiz.git
cd aawiz
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📜 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm start` - Starts the production server
- `npm run lint` - Runs ESLint to check code quality

## 🎨 Key Components

### Product Card
Displays product information including image, title, description, price, rating, and return policy.

### User Card
Shows user profile with avatar, name, and email in a compact card format.

### Navbar
Navigation component for easy access to different sections of the application.

### Input Component
Reusable form input with built-in validation and styling.

### Button Component
Customizable button component with multiple variants and sizes.

## 🔧 Configuration

The project uses:
- **Tailwind CSS v4** for styling with PostCSS
- **TypeScript** for type safety
- **ESLint** for code quality
- **Next.js App Router** for routing and layouts

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- Mobile (default)
- Tablet (sm: 640px)
- Desktop (lg: 1024px)

## 🔒 Form Validation

Forms are validated using:
- React Hook Form for form state management
- Zod for schema validation
- Custom error handling and display

## 🌐 API Integration

The project includes:
- HTTP client service with Axios
- Structured API calls in feature-based modules
- Custom hooks for data fetching
- DTO (Data Transfer Objects) for type-safe data handling

