# Implement of new feature in Iva App BackOffice (SAMA)

## list 

#### (app/(hydrogen)/feature/list)

directory structure: mkdir `src/app/(hydrogen)/feature/list/*`

1.  `header.tsx`: generate title and breadcrumb page
2.  `columns.tsx`: generate columns table with status column including: add && delete && update && ...
    - Notice: if you need to handle update by modal view, check [update](#L75) section of this instruction
3.  `page.tsx`: two types of page

    - for list without require input fields to generate table

          1. api call: get data list

          2. useTable hook: generate all functionalities in table, like: pagination && handle table layout && actions
              - Notice: for this handling must get : data && pageSize && totalElement && initialFilterValues(if you need [filter](#L55) for table)

          3. actionFilter function: api call by filters

          4. Table component with following props:
          - (require)columns: get columns
          - (require)tableData: get data from api and fix changes data after filter and pagination
          - (optional)buttons: show any ReactNode in layout table
          - (optional)pageHeader: show title and breadcrumb page
          - (optional)paginatorOptions: pagination table
          - (optional)filterElement: show filter drawer
          - (optional)hasExportFile: export file
          - (optional)exportFileName: get name Excel file
          - (optional)exportColumns: get title of Excel columns
          - (optional)onExpand: show any ReactNode in expand table row

    - for list with require input data (inquiry-list)

          1. add form for get my data response with api call

          2. useTable hook: generate all functionalities in table, like: pagination && handle table layout && actions
             /* for this handling must get : data && pageSize && totalElement && initialFilterValues */

          3. actionFilter function: api call per filter

          4. Table component with following props:
          - (require)columns: get columns
          - (require)tableData: get data from api and fix changes data after filter and pagination
          - (optional)paginatorOptions: pagination table
          - (optional)filterElement: show filter drawer
          - (optional)hasExportFile: export file
          - (optional)exportFileName: get name Excel file
          - (optional)exportColumns: get title of Excel columns
          - (optional)onExpand: show any ReactNode in expand table row
          - (optional)requiredSeachTable: for this type of table

4.  `filter.tsx`: create object for generate content filter in drawer

## create 

#### (app/(hydrogen)/feature/create)

1.  `header.tsx`: generate title and breadcrumb page

2.  `page.tsx`: add Form

## detail 

#### (app/(hydrogen)/feature/detail)

1. `[id]/page.tsx`: show more data based on id

2. `collaps.tsx`: show any ReactNode (Optional)

3. `header.tsx`: generate title and breadcrumb page

## update

#### (app/(hydrogen)/feature/update)

1. `header.tsx`: generate title and breadcrumb page

2. `modal.tsx`: edit row in modal

3. `[id]/page.tsx`: edit data with api call (in case of form is too big)
