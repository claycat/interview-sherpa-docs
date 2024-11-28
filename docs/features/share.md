---
sidebar_position: 4
---

# Access Control

import Image from '@theme/IdealImage';

It is possible to share your work with other people by controlling access to your flow.

It uses [role-based-access-control(RBAC)](https://en.wikipedia.org/wiki/Role-based_access_control) with a resource specific scope.

It is similar to how popular collaborative services such as Google Docs or Figma work.

Currently, only token based access control is available.

*Email based sharing so that inviting registered users by their emails is on my [roadmap](https://github.com/claycat/interview-sherpa-be-mono/issues/31)*

## Token Based!

By clicking on the share button, owners can create links that allows random users to access their work within a role.

<center>
  <Image img={require('./img/rbac.gif')} style={{width: 500}} />
</center>

<br/>
The roles and permissions are depicted by the following image.
<br/>

<center>
  <Image img={require('./img/rbac.png')} style={{width: 400}} />
</center>
