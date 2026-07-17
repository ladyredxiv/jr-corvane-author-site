# J.R. Corvane Author Website

Official author site for J.R. Corvane and *Blood of the Bound*, book one of **The Sundering Bloodlines**.

## Website files

The production-ready static website lives in `site/`. It includes the MailerLite signup integration and can be hosted by any ordinary web server.

## Namecheap cPanel deployment

1. In cPanel, open **Git Version Control**.
2. Clone this repository into a folder outside `public_html`, such as `repositories/jr-corvane`.
3. Open **Manage → Pull or Deploy**.
4. Choose **Deploy HEAD Commit**.

The included `.cpanel.yml` copies the contents of `site/` into the account's `public_html` directory. Future updates only require pulling the latest commit and deploying it.

Before the first deployment, remove Namecheap's placeholder `index.html` from `public_html` if one exists. Preserve any mail-related configuration files.

## Local preview

Open `site/index.html` through a local web server. The MailerLite form requires an internet connection to load.
