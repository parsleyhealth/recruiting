# Backend Engineer Challenge

## Goal

The goal of this exercise is to see how you might approach a typical backend
data application.

## Prompt: Patient Data API

You are asked to create a reliable API based on an existing patient data set.
The API should support standard CRUD behaviors, along with tests to ensure they
are all functioning properly.

> If you have any questions email me at michael@parsleyhealth.com.

### Tasks

1.  Create a basic API that supports the following methods:

    * Listing patient records with pagination support.
    * Reading records using an id.
    * Updating records.
    * Deleting existing records.
    * Creating new records.

2.  Make your API run in a container of some sort. `Docker` would be the obvious
    choice, but if you're a big `Vagrant` fan go for it.

3.  Write a suite of tests that verify the following are true:

    * A paginated list, sorted lexically by last_name, ascending, limited to 10
      results per page, should return row id `mxvv62yn` as the first result of
      the second page.
    * Reads a correct record when supplied with an id.
    * Successfully updates an existing record, changing the email address, dob
      and age with valid values.
    * Fail to update an existing record with an invalid dob, `BADDATE`.
    * Deleting an existing record works.
    * Creating a new record works.

## Fixtures

See the files in this folder for your initial data set:

* An SQLite database `database.db` with a `person` table,
* and a `person.csv` file with the same data as the person table.

## Consider

* **Application**: Write your API handlers using whatever language and web
  framework you are most comfortable with. `Express / Node.js`, `Play / Java`,
  `Flask / Python` are some common and popular web frameworks. While REST APIs
  are the most common, feel free to use GraphQL, Falcor, or another interface if
  you prefer it.

* **Database**: Along with the SQLite database a CSV of the data is also
  provided. If you prefer to use another database you are welcome to, however
  the database should likewise run in a container, so consider using
  `Docker Compose` or a similar tool.

## Evaluation

You will be evaluated on the following:

1.  Does it work?
2.  Do all the tests pass?
3.  Cleanliness and clarity of code.
4.  Project organization.

Also, while you won't be evaluated on it per se, if you take this as an
opportunity to try out a new tool or language, we will certainly respect the
effort.

## Time limit

Please limit yourself to **4 hours** for this project.

## Wrap up

* Please place your finished source code on GitHub[*]
* Email me the repository URL at michael@parsleyhealth.com
* We will then schedule a short wrap up call to go over your results and the
  thought and planning you applied to this project.

> [*] If for some reason you would rather not have your code or application out
> in the open, please send me a zip file of the source code and instructions on
> to launch and view the finished application.
