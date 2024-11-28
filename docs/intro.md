---
sidebar_position: 1
---

# Introduction

This is a **side project** developed by [me](https://github.com/claycat) mainly to help **prepare for interviews.**

There are many online materials or github repositories to help prepare for interviews related with software engineer positions.

But I thought that having a platform that could connect the dots and have information saved in a service would be preferrable.

Based on that idea, I created [Interview Sherpa](https://www.interviewsherpa.site/topic)

## Inspirations and Concepts

When you are having an interview for a software engineer position, you tend to get lots of **follow-up questions**

**Interviewer**: *"What is the difference between a thread and a process?"*

**Interviewee**: *"A process is a program under action, and a thread is a unit of execution of a process"*

**Interviewer**: *"What is faster in general? Threads or processes?"*

**Interviewee**: *"Threads are generally faster because of low overhead in context switching and sharing data."*

*Interviewer goes on to ask about context switching and inter process communication...*

To track the path that lead to the question and keep a record on your answers, Interview Sherpa uses **mindmaps**.


## Getting Started

To run this project on your machine, you need to reference two repositories.

1. Frontend Repository [interview-sherpa-fe](https://github.com/claycat/interview-sherpa-fe)
2. Backend Repository [interview-sherpa-be-mono](https://github.com/claycat/interview-sherpa-be-mono)

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
