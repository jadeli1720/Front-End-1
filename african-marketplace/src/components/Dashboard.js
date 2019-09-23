import React from "react";

const Dashboard = () => {
  
  
  
    return (
      <div className="Dashboard-block">
          <h2>App ready to work</h2>
          <p>Start info</p>

          <h3>Installed libraries:</h3>
          <p>Axios, Semantic UI, React-router, React-router-dom</p>

          <h3>Installed fonts:</h3>
          <p>'Raleway' for headers, 'Muli' for text</p>

          <h3>Added utilite</h3>
          <p>axiosWithAuth() can help create shorter axios calls</p>

          <h3>Main colors</h3>
          <div className="ExColors"> 
            <div className="Colors">#D83122</div>
            <div className="Colors">#F26615</div>
            <div className="Colors">#F29421</div>
            <div className="Colors">#F2A921</div>
            <div className="Colors">#6F721A</div>
          </div>

      </div>
    );
  };
  
  export default Dashboard;