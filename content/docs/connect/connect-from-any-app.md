---
title: Connect from any application
subtitle: Learn how to connect to Neon from any application
enableTableOfContents: true
updatedOn: '2024-02-08T15:20:54.274Z'
---
When connecting to Neon from an application or client, you connect to a database in your Neon project. In Neon, a database belongs to a branch, which may be the primary branch of your project (`main`) or a child branch.

You can obtain the database connection details you require from the **Connection Details** widget on the **Neon Dashboard**. Select a branch, a compute, a database, and a role. A connection string is constructed for you.

![Connection details widget](/docs/connect/connection_details.png)

Neon supports pooled and direct connections to the database. Use a pooled connection string if your application uses a high number of concurrent connections. For more information, see [Connection pooling](/docs/connect/connection-pooling#connection-pooling).

A Neon connection string includes the role, password, hostname, and database name.

```text
postgres://alex:AbC123dEf@ep-cool-darkness-123456.us-east-2.aws.neon.tech/dbname
           ^    ^         ^                                               ^
     role -|    |         |- hostname                                     |- database
                |
                |- password
```

<Admonition type="note">
The hostname includes the ID of the compute endpoint, which has an `ep-` prefix: `ep-cool-darkness-123456`. For more information about Neon connection strings, see [Connection string](/docs/reference/glossary#connection-string).
</Admonition>

You can use the details from the connection string or the connection string itself to configure a connection. For example, you might place the connection details in an `.env` file, assign the connection string to a variable, or pass the connection string on the command-line.

`.env` file:

```text
PGUSER=alex
PGHOST=ep-cool-darkness-123456.us-east-2.aws.neon.tech
PGDATABASE=dbname
PGPASSWORD=AbC123dEf
PGPORT=5432
```

Variable:

```text shouldWrap
DATABASE_URL="postgres://alex:AbC123dEf@ep-cool-darkness-123456.us-east-2.aws.neon.tech/dbname"
```

Command-line:

```bash shouldWrap
psql postgres://alex:AbC123dEf@ep-cool-darkness-123456.us-east-2.aws.neon.tech/dbname
```

<Admonition type="note">
Neon requires that all connections use SSL/TLS encryption, but you can increase the level of protection by appending an `sslmode` parameter setting to your connection string. For instructions, see [Connect to Neon securely](/docs/connect/connect-securely).
</Admonition>

## Where do I obtain a password?

It's included in your Neon connection string, which you can find on the Neon **Dashboard**, in the **Connection Details** widget.

## What port does Neon use?

Neon uses the default Postgres port, `5432`.

## Connection examples

The **Connection Details** widget on the **Neon Dashboard** also provides connection examples for different programming languages and application frameworks, constructed for the branch, database, and role that you select.

![Language and framework connection examples](/docs/connect/code_connection_examples.png)

See our [Framework, language, and platform guides](https://neon.tech/docs/guides/guides-intro) for more connection examples.

## Network protocol support

Neon currently supports **IPv4**. Support for other network protocols, including IPv6, is **not available** at this time.

Additionally, Neon provides a serverless driver that supports both WebSocket and HTTP connections. For further information, refer to our [Neon serverless driver](/docs/serverless/serverless-driver) documentation.

## Connection notes

- Some older client libraries and drivers, including older `psql` executables, are built without [Server Name Indication (SNI)](/docs/reference/glossary#sni) support and require a workaround. For more information, see [Connection errors](/docs/connect/connection-errors).
- Some Java-based tools that use the pgJDBC driver for connecting to Postgres, such as DBeaver, DataGrip, and CLion, do not support including a role name and password in a database connection string or URL field. When you find that a connection string is not accepted, try entering the database name, role, and password values in the appropriate fields in the tool's connection UI when configuring a connection to Neon. For examples, see [Connect a GUI or IDE](/docs/connect/connect-postgres-gui#connect-to-the-database).

<NeedHelp/>
