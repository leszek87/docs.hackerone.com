webpackJsonp([5801527803180],{537:function(t,n){t.exports={data:{markdownRemark:{html:'<p>HackerOne enables you to set up a bi-directional Jira integration. This means that Jira users can sync specific workflows from Jira to HackerOne and vice versa, from HackerOne to Jira. There\'s no need to go back and forth between Jira and HackerOne. With this integration, valid bug reports become task assignments in JIRA with a single click, and fixed bugs automatically come back as being marked as resolved. This integration helps your development and security teams stay aligned, and contributes to a better workflow to process security vulnerabilities.</p>\n<p>improves the collaboration between various teams by making it easier to review information across teams and tools. </p>\n<p>These events and directions are currently supported through the bi-directional Jira integration: </p>\n<table>\n<thead>\n<tr>\n<th>HackerOne to Jira</th>\n<th>Jira to HackerOne</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Comments</td>\n<td>Coments</td>\n</tr>\n<tr>\n<td>State changes</td>\n<td>State changes</td>\n</tr>\n<tr>\n<td>Rewards</td>\n<td>Resolution changes</td>\n</tr>\n<tr>\n<td>Asignee changes</td>\n<td>Asignee changes</td>\n</tr>\n<tr>\n<td>Public disclosure</td>\n<td>Priority changes</td>\n</tr>\n</tbody>\n</table>\n<p>You can choose to integrate from 2 different types of Jira integrations:</p>\n<table>\n<thead>\n<tr>\n<th>Option</th>\n<th>Details</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><a href="jira-cloud-integration.html">Jira Cloud</a></td>\n<td>You can access Jira from anywhere in the world.</td>\n</tr>\n<tr>\n<td><a href="jira-server-integration.html">Jira Server</a></td>\n<td>Jira is self-hosted and can be behind a firewall or VPN.</td>\n</tr>\n</tbody>\n</table>\n<p><i>Note: Jira Cloud isn\'t compatible with Jira Server.</i></p>\n<h3>How it Works</h3>\n<p>A HackerOne report gets triaged and escalated into Jira.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/jira-integration-3a43b77e9dd331c0203c13c005e9673c-c8628.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 17.034700315457414%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAk0lEQVQI101P7QrDIAz0/d+pf32JbmyUDYW2VjutH53eNFRY4MglkLscw1UpJZznCe89IcZIu9ZDCAi1x2s+Do9SSj8l3sE45zDGkMg0TZBSkkDOXwghsCxr5Rni9cZzvOEx3rHX3TwryM3BhYT/YsMwkEhzVkpBaw3nHBk03s2MNtjURrD7B9Za2Pqpr+Y9SUv4Awgk5tpy3a4LAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="jira-integration-1"\n        title=""\n        src="/static/jira-integration-3a43b77e9dd331c0203c13c005e9673c-e7ffa.png"\n        srcset="/static/jira-integration-3a43b77e9dd331c0203c13c005e9673c-49813.png 125w,\n/static/jira-integration-3a43b77e9dd331c0203c13c005e9673c-dc8a5.png 250w,\n/static/jira-integration-3a43b77e9dd331c0203c13c005e9673c-e7ffa.png 500w,\n/static/jira-integration-3a43b77e9dd331c0203c13c005e9673c-dda24.png 750w,\n/static/jira-integration-3a43b77e9dd331c0203c13c005e9673c-c5f18.png 1000w,\n/static/jira-integration-3a43b77e9dd331c0203c13c005e9673c-c8628.png 1268w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Hackbot automatically captures the status change and posts an internal comment on the associated HackerOne report.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/jira-cloud-4-c879776b401409d1bd5fddefd2dee9be-c2133.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 22.712418300653596%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAAAsSAAALEgHS3X78AAAApklEQVQY06XLyw6DIBRFUf//+0x8lCsqraBUK6iVt8VJ0zjtyRqenez7Hpw12jijg7U+MiYK3h8hRMG5C6u109oqlWAA1t4RdE1F2jxr8uxxuzV53mM81HVfYfOanRBfdp4FpdswLIwlTu0UAaswhapDiAHwuo69pFSN45vz+P6NIy/lSYjEa02KAqUpKcsO4EmImqaNcyPEsW1hXd2yXEl5ivHxxz531xy72SojpAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="jira-integration-2"\n        title=""\n        src="/static/jira-cloud-4-c879776b401409d1bd5fddefd2dee9be-e7ffa.png"\n        srcset="/static/jira-cloud-4-c879776b401409d1bd5fddefd2dee9be-49813.png 125w,\n/static/jira-cloud-4-c879776b401409d1bd5fddefd2dee9be-dc8a5.png 250w,\n/static/jira-cloud-4-c879776b401409d1bd5fddefd2dee9be-e7ffa.png 500w,\n/static/jira-cloud-4-c879776b401409d1bd5fddefd2dee9be-dda24.png 750w,\n/static/jira-cloud-4-c879776b401409d1bd5fddefd2dee9be-c5f18.png 1000w,\n/static/jira-cloud-4-c879776b401409d1bd5fddefd2dee9be-c2133.png 1224w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>',frontmatter:{path:"/programs/jira-integration.html",id:"programs/jira-integration",title:"Jira Integration",description:null}}},pathContext:{}}}});
//# sourceMappingURL=path---programs-jira-integration-html-9ff3913820cf6138bb13.js.map