# Implement of new feature in Iva App BackOffice (SAMA)

## list

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
             4-1. (require)columns: get columns
             4-2. (require)data: get data from api call
             4-3. (optional)buttons: show each ReactNode in layout table
             4-4. (optional)pageHeader: show title and breadcrumb page
             4-5. (optional)paginatorOptions: pagination table
             4-6. (optional)filterElement: show filter drawer
             4-7. (optional)hasExportFile: export file
             4-8. (optional)exportFileName: get name Excel file
             4-9. (optional)exportColumns: get title of Excel columns
             4-10. (optional)onExpand: show each ReactNode in expand table row

    - for list with require input data (inquiry-list)

          1. add form for get my data response with api call

          2. useTable hook: generate all functionalities in table, like: pagination && handle table layout && actions
             /* for this handling must get : data && pageSize && totalElement && initialFilterValues */

          3. actionFilter function: api call per filter

          4. Table component with following props:
             4-1. (require)columns: get columns
             4-2. (require)data: get data from api call
             4-3. (optional)paginatorOptions: pagination table
             4-4. (optional)filterElement: show filter drawer
             4-5. (optional)hasExportFile: export file
             4-6. (optional)exportFileName: get name Excel file
             4-7. (optional)exportColumns: get title of Excel columns
             4-8. (optional)onExpand: show each ReactNode in expand table
             4-9. (optional)requiredSeachTable: for this type of table

4.  `filter.tsx`: create object for generate content filter in drawer

## create

1.  `header.tsx`: generate title and breadcrumb page

2.  `page.tsx`: add Form

## detail

1. `[id]/page.tsx`: show more data based on id

2. `collaps.tsx`: show any ReactNode (Optional)

3. `header.tsx`: generate title and breadcrumb page

## update ###(app/(hydrogen)/feature/update)

1. `header.tsx`: generate title and breadcrumb page

2. `modal.tsx`: edit row in modal

3. `[id]/page.tsx`: edit data with api call (in case of form is too big)
