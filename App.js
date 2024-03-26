import React from 'react';

function App() {
    return (
        <div className="container">
            <header>
                <h1 className="text-center mt-4 mb-4">Fitness Tracker</h1>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Workout Plans</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Quick Routines</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Progress Tracking</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main>
                {/* Placeholder for WorkoutPlan component */}
                <section className="mt-4">
                    <h2>Workout Plans</h2>
                    <p>This section will display personalized workout plans.</p>
                </section>
                {/* Placeholder for QuickRoutine component */}
                <section className="mt-4">
                    <h2>Quick Routines</h2>
                    <p>This section will display quick workout routines.</p>
                </section>
                {/* Placeholder for ProgressTracker component */}
                <section className="mt-4">
                    <h2>Progress Tracking</h2>
                    <p>This section will display progress tracking features.</p>
                </section>
            </main>
            <footer className="text-center mt-4 mb-4">
                <p>&copy; 2024 Fitness Tracker. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
