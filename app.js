
const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;

  const currentTime = new Date().toISOString();
  
  const response = {
    slack_name: slackName,
    current_day: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
    utc_time: currentTime,
    track: track,
    github_file_url: 'https://github.com/sam-shot/hng_stage_one_backend/blob/main/app.js',
    github_repo_url: 'https://github.com/sam-shot/hng_stage_one_backend/',
    status_code: 200,
  };

  res.send(response);
});
app.get('/', (req, res) => {
  

  res.send({
    status: "E dey Shake for here"
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
