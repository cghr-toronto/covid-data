# Contribution Notes

Contribution notes for [covid-data](https://github.com/cghr-toronto/covid-data)

## Saving Changes

Save changes to your remote branch:

1. Switch to your branch if needed `git checkout`
2. Add untracked files `git add`
3. Commit your changes `git commit`
4. Push changes to your remote branch `git push`

```
git checkout <BRANCH-NAME>
git add .
git commit -a -m "SHORT DESCRIPTION OF CHANGES"
git push
```

## Pulling Updates

Grab updates from the `master` branch:

1. Ensure you are in your branch `git checkout`
2. Pull changes from the `master` branch `git pull`
3. Pull changes from any submodules `git submodule`
4. Resolve any conflicts if necessary

```
git checkout <BRANCH-NAME>
git submodule update --recursive --remote
git pull origin master
```

## Submitting Changes

When you are ready to submit changes to the website:

1. **If you are submitting changes to data**, ensure they meet the [Data Submission Standards](#data-submission-standards) before continuing
2. Create a pull request [here](https://github.com/cghr-toronto/covid-data/compare) (base: `master`, compare: `<BRANCH-NAME>`)
3. Add a meaningful title and description of your changes
4. Your pull request will be [here](https://github.com/cghr-toronto/covid-data/pulls)
5. Wait for approval or request for changes
6. Once approved, your changes will be merged into `master`

## Data Submission Standards

If you are submitting changes to or adding datasets, please follow the standards outlined in the following sections.

If they meet the standards, proceed and [submit your changes](#submitting-changes).

### Dataset Names

Each dataset has a `<DATASET-NAME>` following the rules below:

* **Lowercase**: names should be lowercased only
* **Underscore**: names can separate phrases or words with underscores `_` only (no spaces, dashes, or other separators)
* **Alphanumeric**: only letters, numbers, and underscores `_` are allowed
* **Unique**: does not conflict with names in the [data folder](data)

### Dataset Folders

Each **folder** in the [data folder](data) contains a dataset with the following files:

:book: `README.md`: file with at least the content described below

* **Dictionary Link**: a link to the data dictionary at the top
* **Description**: a brief description of the data
* **Sources**: where and which original sources the data came from
* **Processing**: whether the data was modified from the original sources, and what processes were done to modify it

:page_facing_up: `<DATASET-NAME>.ext`: the dataset file containing the data

* `<DATASET-NAME>`: name of the dataset (same as the containing folder and following [naming standards](#dataset-names)
* `.ext`: The `.ext` is lowercased in `.csv`, `.xls`, `.xlsx`, `.json`, or `.geojson`
  
:page_facing_up: `<DATASET-NAME>_dictionary.csv`: a data dictionary describing the columns or features of the dataset

* The dictionary is in tabular format (rows and columns)
* Each column describes a feature or column in the dataset file
* Each row (except the first) contains a column name, type, and brief description

|         Name          |           Type              |               Description                   |
|-----------------------|-----------------------------|---------------------------------------------|
| name of the column 1  | data type of the column 1   |    a brief description of the column 1      |
| name of the column 2  | data type of the column 2   |    a brief description of the column 2      |
|         ...           |           ...               |               ...                           |

**Example for dataset_name**

```
data
|--- dataset_name
     |--- README.md
     |--- dataset_name.csv
     |--- dataset_name_dictionary.csv
```
