import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ProjectsOverview() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-28 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Overview of Data Analysis Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Project 1 */}
          <Link
            href="/projects/project1"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold text-gray-400 mb-2">
              SuperStore Sales Dashboard
            </h2>
            <p>
              A Streamlit dashboard that transforms Amazon review data into interactive, insight-rich visuals—highlighting my skills in SQL data extraction, Python-based transformation, and user-centered analytics to help stakeholders explore sentiment trends, review quality, and product performance with ease.
            </p>
          </Link>

          {/* Project 2 */}
          <Link
            href="/projects/project2"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold text-gray-400 mb-2">
              SQL + Python Data Pipeline
            </h2>
            <p>
              Extracted customer sales data using SQL, cleaned and analyzed it
              with Python (Pandas), and visualized trends using matplotlib and
              seaborn to uncover key business insights.
            </p>
          </Link>

          {/* Project 3 */}
          <Link
            href="/projects/project3"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold text-gray-400 mb-2">
              Term Deposit Subscription Predictor
            </h2>
            <p>
              Built a full-stack machine learning app using Random Forest and SMOTE to predict whether a banking customer will subscribe to a term deposit. Includes interactive dashboards for model evaluation, batch prediction, and customer segmentation via Streamlit.
            </p>
          </Link>

          {/* Project 4 */}
          <Link
            href="/projects/project4"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold text-gray-400 mb-2">
              Live Data Stream Dashboard
            </h2>
            <p>
              A real-time dashboard built with FastAPI, WebSockets, and React that streams live clickstream data and purchase activity. Includes dynamic Chart.js visualizations, CSV export, and logs live product interactions. Built for performance monitoring and behavioral analysis.
            </p>
          </Link>

          {/* Project 5 */}
          <Link
            href="/projects/project5"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold text-gray-400 mb-2">
              Task Tracker with Google Sheets
            </h2>
            <p>
              A lightweight task management tool built in React using TailwindCSS and connected to Google Sheets for persistent data storage. Includes dynamic filtering by task status, real-time submission form, and spreadsheet sync for tracking due dates and priorities.
            </p>
          </Link>

          {/* Project 6 */}
          <Link
            href="/projects/project6"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold text-gray-400 mb-2">
              Customer Churn Prediction Model
            </h2>
            <p>
              Developed a machine learning model to predict customer churn, using scikit-learn for model training and evaluation. Features include data preprocessing, feature engineering, and a comparative analysis of different classification algorithms (e.g., Logistic Regression, Gradient Boosting) to identify the most impactful predictors of churn.
            </p>
          </Link>
        </div>
      </main>
    </>
  );
}