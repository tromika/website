---
title: Configuring Autosuspend for Neon computes
subtitle: Learn how to configure Neon's Autosuspend feature to control when your compute
  scales to zero
enableTableOfContents: true
updatedOn: '2024-02-19T18:57:12.550Z'
---

Neon's [Autosuspend](/docs/introduction/auto-suspend) feature controls when a Neon compute endpoint transitions to an `Idle` state (scales to zero) due to inactivity. For example, if your autosuspend setting is 5 minutes, your compute will "scale to zero" after it's been inactive for 5 minutes. Neon's paid plans allow you to configure this time period to keep your compute active for longer, suspend it more quickly, or disable autosuspension entirely, depending on your requirements. 

This guide demonstrates how to configure the autosuspend setting for a new project, for an existing project, or for an individual compute endpoint.

### Autosuspend limits

The autosuspend limits differ by [Neon plan](/docs/introduction/plans). The limits for each plan are outlined below. The initial default setting for all plans is 5 minutes.


| Plan       | Autosuspend delay                | Can be disabled? |
|------------|----------------------------------|------------------|
| Free Tier  | 5 minutes                        |                  |
| Launch     | 5 minutes to 7 days              | &check;          |
| Scale      | 1 minute to 7 days               | &check;          |
| Enterprise | Fully configurable               | &check;          |


### Configure the autosuspend setting for a new project

Configuring the autosuspend setting for a new project sets the project's default, which is applied to all computes created from that point forward. You can adjust this autosuspend default at any time, or configure the setting for individual compute endpoints later, as necessary.

To configure the autosuspend default setting when you first create your project:

1. Navigate to the [Neon Console](https://console.neon.tech).
1. If you are creating your very first project, click **Create a project**. Otherwise, click **New Project**.
1. Specify a name, a Postgres version, and a region.
1. Under **Compute size**, select **Suspend compute after a period of inactivity** and specify your delay period. Deselecting **Suspend compute after a period of inactivity** disables autosuspend, meaning the compute is always active.

    <Admonition type="note">
    You can configure default **Compute size** settings at the same time.
    </Admonition>

1. Click **Save**.
1. Click **Create Project**. Your initial compute endpoint is created with the specified setting.

### Configure the autosuspend setting for an existing project

Configuring the autosuspend setting for an existing project sets the project's default, which is applied to all compute endpoints created from that point forward. Existing compute endpoints are unaffected. You can adjust the autosuspend default or configure the setting for individual compute endpoints later, as necessary.

To configure the autosuspend default for an existing project:

1. Select a project in the Neon console.
1. On the Neon **Dashboard**, select **Project settings**.
1. Select **Compute** and click **Change**.
1. Select **Suspend compute after a period of inactivity** and specify your delay period. Deselecting **Suspend compute after a period of inactivity** disables autosuspend, meaning the compute is always active.

    <Admonition type="note">
    You can configure default **Compute size** settings at the same time.
    </Admonition>

1. Click **Save**.

## Configure autosuspend for a compute endpoint

To configure the autosuspend setting for an individual compute endpoint:

1. In the Neon Console, select **Branches**.
1. Select a branch.
1. Click the menu in the **Computes** table, and select **Edit**.
![Edit compute endpoint menu](/docs/guides/autoscaling_edit.png)
1. Under **Compute size**, select **Suspend compute after a period of inactivity** and specify your delay period. The maximum setting is 7 days. Deselecting **Suspend compute after a period of inactivity** means the compute is always active.

    <Admonition type="note">
    You can configure **Compute size** settings for your compute endpoint at the same time.
    </Admonition>

1. Click **Save**.

## Monitor autosuspend

You can monitor autosuspend on the **Branches** page in the Neon Console. A compute reports either an **Active** or **Idle** status.

![Compute endpoint status](/docs/connect/compute_endpoint_state.png)

You can also view compute state transitions in the **Branches** widget on the Neon **Dashboard**.

User actions that activate an idle compute include [connecting from a client such as psql](/docs/connect/query-with-psql-editor), running a query on your database from the [Neon SQL Editor](/docs/get-started-with-neon/query-with-neon-sql-editor), or accessing the compute via the [Neon API](https://api-docs.neon.tech/reference/getting-started-with-neon-api).

<Admonition type="info">
The Neon API includes [Start endpoint](https://api-docs.neon.tech/reference/startprojectendpoint) and [Suspend endpoint](https://api-docs.neon.tech/reference/startprojectendpoint) APIs for the specific purpose of activating and suspending a compute.
</Admonition>

You can try any of these methods and watch the status of your compute as it transitions from an **Idle** to an **Active** state.
