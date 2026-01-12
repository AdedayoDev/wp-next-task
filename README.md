Architecture & Reasoning


1. The lib Folder contains the GraphQl and the REST files, while i created a folder called component where my re-useable components lives.

I made it this way so that new API or UI can be added

2. I used the useState for the form input values and for the toggle button
I used useState because the form input and the toggle button is state specific and not used across many pages.

3. With 10+ API request the app will become slower, and i think it will become more difficult to handle error.
   How to fix this?
   from my research if i introduce caching and making request in a batch and not at once

4. if wordpress goes down, no post, currency, name will be rendered in the UI

6. The Part i used AI for is
GraphQl Logic, REST API Logic, UI rendering and error handling in the Next.js app, API endpoints


7. When a new post is published in WordPress, I would trigger an automation by sending a webhook event to n8n. This can be done by adding a small snippet in WordPress or using a webhook plugin that fires when a post is published and sends basic post details title and link to an n8n webhook URL.

In n8n, the workflow would start with a Webhook Trigger, then format the post data, and finally send a message to a Slack channel using the Slack node. The Slack message would notify the team that a new blog post has been published and include the post title and link.