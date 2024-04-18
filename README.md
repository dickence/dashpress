## 自动生成后台管理页面的工具

<h1 align="center">
  <a href="https://github.com/dashpresshq/dashpress">
    <img src="https://dashpress.io/assets/banner/1.png" alt="Logo" >
  </a>
</h1>

<div align="center">

[![Project license](https://img.shields.io/github/license/dashpresshq/dashpress.svg)](LICENSE)
[![Pull Requests welcome](https://img.shields.io/badge/PRs-welcome-23bc42.svg)](https://github.com/dashpresshq/dashpress/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)
<img src="https://img.shields.io/npm/v/dashpress" />
<img src="https://img.shields.io/github/languages/top/dashpresshq/dashpress" />


[![Maintainability](https://api.codeclimate.com/v1/badges/23516bfbcca7557d80a5/maintainability)](https://codeclimate.com/github/dashpresshq/dashpress/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/23516bfbcca7557d80a5/test_coverage)](https://codeclimate.com/github/dashpresshq/dashpress/test_coverage)
<img src="https://img.shields.io/codeclimate/tech-debt/dashpresshq/dashpress" />
![GitHub CI](https://github.com/dashpresshq/dashpress/actions/workflows/release.yml/badge.svg)


</div>

<div align="center">
  <a href="https://demo.dashpress.io" target="_blank">Live Demo</a>
  ·
  <a href="https://discord.gg/aV6DxwXhzN" target="_blank">Join Community</a>
</div>


<details open="open">
<summary>Table of Contents</summary>

- [About](#about)
  - [Demo](#demo)
  - [Features Walkthrough Video](#features-walkthrough-video)
  - [Motivation](#motivation)
  - [Why you should try DashPress](#why-you-should-try-dashpress)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Features](#features)
- [Roadmap](#roadmap)
- [Support](#support)
- [Project assistance](#project-assistance)
- [Contributing](#contributing)
- [Authors & contributors](#authors--contributors)
- [Security](#security)
- [License](#license)
- [Built With](#acknowledgements)

</details>

---

## About
DashPress generates powerful admin apps from your database information 
- With just one command
- Under 30 seconds 
- No tutorial
- No learning curve
- No drag and drop
- No technical skills required
- Zero maintenance 

What you get is a fully functional admin app that is ready to be deployed.

DashPress will help you focus your engineering resources on building exciting features and not building and maintaining boring and repetitive CRUD apps.

### Demo
https://demo.dashpress.io is an example admin app generated with DashPress without writing any line of code.

### Features Walkthrough Video
Click on the image below to see a walkthrough of the many features DashPress provides.

[![Watch the video](https://img.youtube.com/vi/aO500EjHw1c/mqdefault.jpg)](https://youtu.be/aO500EjHw1c)


### Motivation
Most internal tool applications make you build from the ground up i.e you get a blank canvas, drag and drop components, and wire them together with SQL and Javascript/Python to satisfy your business requirement. This I believe has many problems.

- They require some technical knowledge. 
- They require some learning curve. 
- They require time to build.
- You duplicate a lot of business logic already in your database.
- You to maintain them. 

DashPress attempts internal tool generation with a new approach by introspecting your database and building a multi-page application based on all the info it can find like your field types, relationships, constraints etc. You literally can have your admin app done in seconds without any tutorial or coding.

### Why you should try DashPress
- It is free
- Easiest installation, Just one command to install and run
- You will always be running the latest version
- The little learning curve with truly less than 5% technical knowledge requirement
- Tons of features
- Language/framework agnostic
- Lastly, It is open source.

## Getting Started

### Prerequisites
 - [Node.js](https://nodejs.org/en/download/)
 - Supported database (MySQL, Postgres, MsSQL, SQLite)

### Installation

```bash
$ cd <project_name>

$ npx dashpress
```

That is all, You will be able to see the application on http://localhost:3000.

If you prefer to use Docker, Check the `Dockerfile.example` file in the root folder of the repo.


## Features
 - Unlimited Users
 - Unlimited Roles
 - One Command Installation
 - Actions Integrations
 - Dashboard Builder
 - CRUD
 - Self Hosted
 - Form Validations
 - Form Logic
 - Breadcrumbs
 - Rich Text Editor
 - Tab Views
 - DB Introspection
 - Fields Customisation
 - Secure Authentication
 - Synced DB Validations
 - Secure Credentials Storage
 - Light And Dark Mode
 - Intelligent Filters
 - Brand Colors
 - Intelligent Data Relationships
 - Menu Builder
 - Themes
 - Personalized Table
 - Bookmarks
 - 2FA
 - Multiple Dashboards
 - Data Export
 - Charts
 - Bulk Actions
 - Fine-Grained Crud Permissions
 - Change History
 - Sensitive Fields

## Roadmap

See the [open issues](https://github.com/dashpresshq/dashpress/issues) for a list of proposed features (and known issues).

- [Top Feature Requests](https://github.com/dashpresshq/dashpress/issues?q=label%3Aenhancement+is%3Aopen+sort%3Areactions-%2B1-desc) (Add your votes using the 👍 reaction)
- [Top Bugs](https://github.com/dashpresshq/dashpress/issues?q=is%3Aissue+is%3Aopen+label%3Abug+sort%3Areactions-%2B1-desc) (Add your votes using the 👍 reaction)
- [Newest Bugs](https://github.com/dashpresshq/dashpress/issues?q=is%3Aopen+is%3Aissue+label%3Abug)

## Support

Join the community at one of the following places:
- [Discord](https://discord.gg/aV6DxwXhzN)
- [Twitter](https://twitter.com/dashpressHQ)
- [GitHub Discussions](https://github.com/dashpresshq/dashpress/discussions)


## Project assistance

If you want to say **thank you** or/and support the active development of DashPress:

- Add a [GitHub Star](https://github.com/dashpresshq/dashpress) to the project.
- Tweet about DashPress.
- Write interesting articles about DashPress on [Dev.to](https://dev.to/), [Medium](https://medium.com/) or your blog.

Together, we can make DashPress **better**!

## Contributing

First off, thanks for taking the time to contribute! Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make will benefit everybody else and are **greatly appreciated**.


Please read [our contribution guidelines](docs/CONTRIBUTING.md), and thank you for being involved!

## Security

DashPress takes security at heart and follows all known good practices of security, but 100% security cannot be assured.
DashPress is provided **"as is"** without any **warranty**.

_For more information and to report security issues, please refer to our [security documentation](docs/SECURITY.md)._

## License

This project is licensed under the **GNU Affero General Public License v3.0**.

See [LICENSE](LICENSE) for more information.
