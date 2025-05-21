import { Chart as ChartJS,PieController, ArcElement, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  PieController
);