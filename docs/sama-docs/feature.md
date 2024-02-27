# Implement of new feature in Iva App BackOffice (SAMA)

## list 
### (app/(hydrogen)/feature/list)

directory structure: mkdir `src/app/(hydrogen)/feature/list/*`

1.  `header.tsx`: generate title and breadcrumb page
2.  `columns.tsx`: generate columns table with status column including: add && delete && update && ...
    - Notice: if you need to handle update by modal view, check [update](#69) section of this instruction
3.  `page.tsx`: two types of page

    - for list without require input fields to generate table

          1. api call: get data list

          2. useTable hook: generate all functionalities in table, like: pagination && handle table layout && actions
              - Notice: for this handling must get : data && pageSize && totalElement && initialFilterValues(if you need [filter](#53) for table)

          3. actionFilter function: api call by filters

          4. Table component with following props:
          - [(require)columns: get columns](#heading-1)
          - [(require)tableData: get data from api and fix changes data after filter and pagination](#heading-2)
          - [(optional)buttons: show any ReactNode in layout table](#heading-3)
          - [(optional)pageHeader: show title and breadcrumb page](#heading-4)
          - [(optional)paginatorOptions: pagination table](#heading-5)
          - [(optional)filterElement: show filter drawer](#heading-6)
          - [(optional)hasExportFile: export file](#heading-7)
          - [(optional)exportFileName: get name Excel file](#heading-8)
          - [(optional)exportColumns: get title of Excel columns](#heading-9)
          - [(optional)onExpand: show any ReactNode in expand table row](#heading-10)

    - for list with require input data (inquiry-list)

          1. add form for get my data response with api call

          2. useTable hook: generate all functionalities in table, like: pagination && handle table layout && actions
             /* for this handling must get : data && pageSize && totalElement && initialFilterValues */

          3. actionFilter function: api call per filter

          4. Table component with following props:
          - [(require)columns: get columns](#heading-1)
          - [(require)tableData: get data from api and fix changes data after filter and pagination](#heading-2)
          - [(optional)paginatorOptions: pagination table](#heading-3)
          - [(optional)filterElement: show filter drawer](#heading-4)
          - [(optional)hasExportFile: export file](#heading-5)
          - [(optional)exportFileName: get name Excel file](#heading-6)
          - [(optional)exportColumns: get title of Excel columns](#heading-7)
          - [(optional)onExpand: show any ReactNode in expand table row](#heading-8)
          - [(optional)requiredSeachTable: for this type of table](#heading-9)

4.  `filter.tsx`: create object for generate content filter in drawer

## create 
### (app/(hydrogen)/feature/create)

1.  `header.tsx`: generate title and breadcrumb page

2.  `page.tsx`: add Form

## detail 
### (app/(hydrogen)/feature/detail)

1. `[id]/page.tsx`: show more data based on id

2. `collaps.tsx`: show any ReactNode (Optional)

3. `header.tsx`: generate title and breadcrumb page

## update 
### (app/(hydrogen)/feature/update)

1. `header.tsx`: generate title and breadcrumb page

2. `modal.tsx`: edit row in modal

3. `[id]/page.tsx`: edit data with api call (in case of form is too big)
