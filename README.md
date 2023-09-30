# Blog-Analytics-with-Express-and-Lodash

Developing a blog analytics and search tool using Express.js and Lodash. The goal is to create a middleware that analyzes the data retrieved 
from a third-party blog API (provided via the given curl request) and provides insightful statistics to clients. Additionally, implements a blog search endpoint.

```bash
curl --request GET \
  --url https://intent-kit-16.hasura.app/api/rest/blogs \
  --header 'x-hasura-admin-secret: 32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
```
