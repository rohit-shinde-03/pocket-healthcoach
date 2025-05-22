# pocket-healthcoach
## 1. Purpose
Define and clarify the requirements for “Pocket Health Coach,” a microservices-based application that helps busy individuals record basic health metrics and receive timely coaching nudges—all running on a local Kubernetes development stack with PostgreSQL persistence.

## 2. Background
Market Context: Many health and fitness apps promise comprehensive tracking, but they often overwhelm users with complex interfaces or require costly device integrations.

User Context: Target users are time-pressed professionals or chronic-condition patients who need a simple, rule-based nudging system to sustain positive health behaviors (e.g., daily steps, sleep, weight management).

## 3. Problem Description
Data Capture Friction: Users struggle to log health data consistently when the entry process is cumbersome.

Lack of Personalized Nudges: Generic reminders fail to adapt to individual thresholds or real-time progress.

Technology Barrier: Modern big-tech solutions demand cloud subscriptions and device integrations that may be overkill (and costly) for users starting out.

Developer Constraints: As a solo engineer on a zero-budget project, we need to leverage free, local tools (Kind, PostgreSQL) while still following industry-grade practices for scalability, security, and maintainability.

## 4. Goals & Objectives
By the end of the MVP (Week 10), deliver a running local prototype that enables:

G1: Simple Onboarding & Profile Management

Users can sign up, log in, and manage a minimal health profile.

G2: Manual Health Data Intake

Users can record daily values (steps, weight, sleep) via a lightweight form.

G3: Rule-Based Coaching Engine

Users receive in-app or email nudges when their metrics cross configurable thresholds.

G4: Local DevOps Parity

Entire stack deploys on Kind with Kubernetes best practices (Deployments, Services, ConfigMaps, Secrets) and persists data in a PostgreSQL pod with PVC.

## 5. Scope
In Scope (Week 1 MVP Focus)
Elicitation of user stories for Onboarding, Profile, Data Intake, and Notifications

High-level architecture diagrams (C4 context + containers)

Local tool selection and mapping (Kind, PostgreSQL, MailHog)

Out of Scope (Future Iterations)
Device-sync integrations (Bluetooth, wearable APIs)

AI-driven coaching or predictive analytics

Multi-user production hosting on AWS/GCP

## 6. Stakeholders
Primary User: Busy professional or patient recording daily health metrics

Product Owner/Developer: You (solo engineer)

Advisor/Coach: Me (tech lead guiding requirements & design)

## 7. Assumptions
Users have access to a modern browser for UI interaction.

Email notifications can be simulated via MailHog in development.

All secrets (DB credentials) are stored securely as Kubernetes Secrets.

## 8. Constraints
Budget: Zero cost—must use open-source or free-tier/local tooling only.

Time: MVP must be conceptually defined this week; prototyping begins in Week 2.

Resources: Single developer; no external QA team.

## 9. Success Criteria
Requirement Clarity: Approved set of Epics, Stories, and Acceptance Criteria covering G1–G4.

Design Alignment: Completed C4 diagrams reviewed and signed off.

Developer Readiness: Local Kind cluster standing up; PostgreSQL pod deployed with PVC (proof of concept).
