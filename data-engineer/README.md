# Data Engineering Challenge

## Overview

The aim of this exercise is to get to know how you work better. It shouldn't be too difficult to accomplish the objectives within a few hours.
We're looking for an approach that uses python *and* SQL. This is because real data engineering on massive data sets must make use of tools written in languages other than python, e.g. BigQuery. It would be possible* but not practical to do a challenge similar to this with a petabyte of data on your laptop!

## Prompt

In this directory you should find a [sample dataset](test_dataset.csv) in the form of a CSV file. It contains sample data of counts of the number of Elizabeths registered in the US for social security numbers by year.

You should assume nothing about the integrity of the data, it may be irregularly [typed](https://en.wikipedia.org/wiki/Data_type), but it is a valid CSV file.

*Your tasks are as follows:*

* Parse the CSV using any library or tool you like, ensuring the types of datapoints are regularized during parsing or afterwards - do not manually edit the CSV file.
* Utilize a data science toolkit in python and a SQL database like [SQLite](https://www.sqlite.org/src/doc/trunk/README.md) or [Postgres](https://www.postgresql.org/) to produce values for the following user requirements (see next section):

### User Requirements

- As a Parsley Health team member I need a CSV report containing the number of Elizabeths born per year ordered by the maximum count ascending, year descending.

- in addition I need to see the absolute difference in number of Elizabeths born each year since 1910 if partitioned by year ascending, calculated using the preceding year's count. If a year is missing, it should have a stub row added with zero as the count, so that we have each year represented since 1910 until 2013.

- in addition I need a boolean flag showing whether the yearly delta calculated has increased from the previous year's delta.

## Results and Reporting

Please include your resulting report CSV file in a git repository with all your python and or SQL code and a README file for us to talk over.

It would be nice if you take multiple steps to achieve your goal that they're documented in a git history (but this isn't a must have).

## Submissions

Please send your final result as a compressed (zip | tarball) git repository to [james@parsleyhealth.com](mailto:james@parsleyhealth.com). We will schedule a short call to review your code.

## Questions

If anything isn't clear please don't hesitate to ask, including questions on how to get started if you're not sure.

## Getting started hint!

You might find window functions in a suitable SQL database are useful!
