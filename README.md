# Finance Graph 💰📊

A modern, responsive personal finance tracker application built with React. Easily manage your income, track expenses, and visualize your financial data with interactive monthly and yearly charts.

## Features ✨

- 📝 **Add Transactions** - Record income and expenses with descriptions and amounts
- 💡 **Income Management** - Set and update your income amount
- 📅 **Monthly & Yearly Graphs** - Visualize your spending patterns over time with interactive charts
- 📋 **Transaction Grid** - View all transactions in an organized table format
- 💾 **Local Storage** - All data is saved locally in your browser (no server required)
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean, dark-themed interface with Tailwind CSS styling

## Tech Stack 🛠️

- **React 19** - Modern UI library
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Chart.js** - Powerful charting library
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatter

## Installation 🚀

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Finance-Graph.git
cd Finance-Graph
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Usage 📖

1. **Set Your Income** - Enter your monthly income in the Income section
2. **Add Transactions** - Fill in the transaction form with:
   - Description (what you spent on)
   - Amount (how much)
   - Month (which month it applies to)
3. **View Analytics** - Check the monthly and yearly graphs to see your spending trends
4. **Manage Transactions** - Delete transactions as needed from the transaction grid

## Project Structure 📁

```
src/
├── components/
│   ├── TransactionContext.jsx    # Global state management for transactions
│   ├── TransactionForm.jsx       # Form for adding new transactions
│   ├── TransactionList.jsx       # List of transactions
│   ├── GridOfTransactions.jsx    # Transaction data grid
│   ├── Incomes.jsx               # Income management component
│   ├── GraphMonth.jsx            # Monthly spending chart
│   ├── GraphYear.jsx             # Yearly spending chart
│   ├── PieChart.jsx              # Pie chart component
│   └── chart.js                  # Chart.js configuration
├── App.jsx                       # Main application component
├── App.css                       # Application styles
├── main.jsx                      # React entry point
└── index.css                     # Global styles
```

## Available Scripts 📜

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint to check code quality
- `npm run format` - Format code with Prettier

## How It Works 🔧

The application uses **React Context API** for state management to handle:
- Transactions (add, delete, filter by month)
- Income tracking
- Selected month filtering
- Transaction inspection

Data is persisted using **browser localStorage**, so your data remains even after closing the application.

## Features in Detail 📌

### Transaction Management
- Add unlimited transactions with custom descriptions and amounts
- Organize transactions by month
- Delete transactions individually
- View transaction details

### Financial Visualization
- **Monthly Chart** - See your spending for each month at a glance
- **Yearly Chart** - Analyze your total spending patterns throughout the year
- Interactive charts with Chart.js

### Responsive Design
- Mobile-first approach
- Optimized layouts for all screen sizes
- Smooth scrolling and touch-friendly interface

## Browser Support 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing 🤝

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is open source and available under the MIT License.

## Future Enhancements 🚀

- [ ] Category-based expense tracking
- [ ] Export data to CSV/PDF
- [ ] Budget setting and alerts
- [ ] Data visualization improvements
- [ ] Dark/Light theme toggle
- [ ] Multi-user support

## Support 💬

If you encounter any issues or have suggestions, please open an issue in the repository.

---

**Happy tracking! 📊💰**
