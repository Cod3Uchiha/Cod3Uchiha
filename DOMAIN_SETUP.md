# Domain split: website and API

Use two separate deployments:

- `cod3uchiha.com` and `www.cod3uchiha.com` → this business website repository
- `api.cod3uchiha.com` → the existing API repository/deployment

## Recommended order

1. Deploy this repository as the new business website.
2. Add `cod3uchiha.com` and `www.cod3uchiha.com` to that deployment.
3. Add `api.cod3uchiha.com` to the existing API deployment.
4. Update API documentation, examples, CORS rules and hard-coded links from `https://cod3uchiha.com/...` to `https://api.cod3uchiha.com/...`.
5. Keep temporary redirects from old API paths until clients have migrated.
6. Verify the website, API endpoints, SSL and DNS before removing the old configuration.

The website application form currently submits structured requests through WhatsApp.
