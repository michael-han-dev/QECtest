import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import FitnessCenterIcon from '@mui/icons-content/FitnessCenter';
import RestaurantIcon from '@mui/icons-content/Restaurant';

function App() {
  const [healthData] = useState({
    steps: 8432,
    heartRate: 72,
    sleepHours: 7.5,
    calories: 1850,
    dailyGoals: {
      steps: 10000,
      calories: 2000,
      sleep: 8,
      water: 8
    },
    weeklyStats: [
      { day: 'Mon', steps: 7200, calories: 1750, sleep: 7.2 },
      { day: 'Tue', steps: 8400, calories: 1850, sleep: 6.8 },
      { day: 'Wed', steps: 6800, calories: 1600, sleep: 7.5 },
      { day: 'Thu', steps: 9200, calories: 1950, sleep: 7.8 },
      { day: 'Fri', steps: 8432, calories: 1850, sleep: 7.5 }
    ],
    aiInsights: [
      "Based on your sleep pattern, try going to bed 30 minutes earlier",
      "Your heart rate indicates a good cardio session today",
      "You're 568 steps away from your daily goal",
      "Your calorie intake is below target, consider a healthy snack"
    ],
    workoutSuggestions: [
      {
        title: "HIIT Cardio",
        duration: "20 mins",
        calories: "250-300",
        description: "Based on your heart rate trends, a high-intensity session would be beneficial"
      },
      {
        title: "Strength Training",
        duration: "45 mins",
        calories: "350-400",
        description: "It's been 3 days since your last strength workout"
      }
    ],
    mealSuggestions: [
      {
        meal: "Lunch",
        suggestion: "Grilled chicken salad with quinoa",
        calories: 450,
        protein: "35g"
      },
      {
        meal: "Pre-workout Snack",
        suggestion: "Banana with almond butter",
        calories: 200,
        protein: "7g"
      }
    ]
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Health Tracker</h1>
        
        <div className="health-stats">
          <div className="stat-card">
            <h3>Steps</h3>
            <p>{healthData.steps}</p>
            <div className="goal-progress">
              {Math.round((healthData.steps / healthData.dailyGoals.steps) * 100)}% of daily goal
            </div>
          </div>
          <div className="stat-card">
            <h3>Heart Rate</h3>
            <p>{healthData.heartRate} BPM</p>
          </div>
          <div className="stat-card">
            <h3>Sleep</h3>
            <p>{healthData.sleepHours} hours</p>
            <div className="goal-progress">
              {Math.round((healthData.sleepHours / healthData.dailyGoals.sleep) * 100)}% of daily goal
            </div>
          </div>
          <div className="stat-card">
            <h3>Calories</h3>
            <p>{healthData.calories} kcal</p>
            <div className="goal-progress">
              {Math.round((healthData.calories / healthData.dailyGoals.calories) * 100)}% of daily goal
            </div>
          </div>
        </div>

        <div className="charts-container">
          <h2>Weekly Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={healthData.weeklyStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="steps" stroke="#8884d8" name="Steps" />
              <Line type="monotone" dataKey="calories" stroke="#82ca9d" name="Calories" />
              <Line type="monotone" dataKey="sleep" stroke="#ffc658" name="Sleep (hrs)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="recommendations-container">
          <div className="workout-recommendations">
            <h2><FitnessCenterIcon /> Workout Recommendations</h2>
            {healthData.workoutSuggestions.map((workout, index) => (
              <div key={index} className="recommendation-card">
                <h3>{workout.title}</h3>
                <p>{workout.description}</p>
                <div className="workout-details">
                  <span>Duration: {workout.duration}</span>
                  <span>Calories: {workout.calories}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="meal-recommendations">
            <h2><RestaurantIcon /> Meal Suggestions</h2>
            {healthData.mealSuggestions.map((meal, index) => (
              <div key={index} className="recommendation-card">
                <h3>{meal.meal}</h3>
                <p>{meal.suggestion}</p>
                <div className="meal-details">
                  <span>Calories: {meal.calories}</span>
                  <span>Protein: {meal.protein}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ai-insights">
          <h2>AI Insights</h2>
          <ul>
            {healthData.aiInsights.map((insight, index) => (
              <li key={index}>{insight}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
