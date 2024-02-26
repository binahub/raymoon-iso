# Implement of new feature in Iva App BackOffice (SAMA)

## create

1.  `header.tsx`: generate title and breadcrumb page

2.  `page.tsx`: add Form  

## detail

1. `[id]/page.tsx`: show more data based on id

2. `collaps.tsx`: show any ReactNode (Optional)

3. `header.tsx`: generate title and breadcrumb page

## update

1. `[id]/page.tsx`: edit data with api call (in case of form is too big)

2. `modal.tsx`: edit row in modal

3. `header.tsx`: generate title and breadcrumb page

## list

TWO TYPE OF LIST PAGE :

1. `columns.tsx`: generate columns table with status column including: add && delete && update && ...

2. `filter.tsx`: create object for generate content filter in drawer

3. `header.tsx`: generate title and breadcrumb page

4. `page.tsx`:

   -`page.tsx` for list without require input data

        1. api call: get data list

        2. useTable hook: generate all functionalities in table, like: pagination && handle table layout && actions
           /* for this handling must get : data && pageSize && totalElement && initialFilterValues */

        3. actionFilter function: api call per filter 

        4. Table component with following props:
           b-1. (require)columns: get columns 
           b-2. (require)data: get data from api call
           b-3. (optional)buttons: show each ReactNode in layout table 
           b-4. (optional)pageHeader: show title and breadcrumb page
           b-5. (optional)paginatorOptions: pagination table
           b-6. (optional)filterElement: show filter drawer 
           b-7. (optional)hasExportFile: export file 
           b-8. (optional)exportFileName: get name Excel file
           b-9. (optional)exportColumns: get title of Excel columns
           b-10. (optional)onExpand: show each ReactNode in expand table


   -`page.tsx` for list with require input data (inquiry-list)

        1. add form for get my data response with api call

        2. useTable hook: generate all functionalities in table, like: pagination && handle table layout && actions
           /* for this handling must get : data && pageSize && totalElement && initialFilterValues */

        3. actionFilter function: api call per filter 

        4. Table component with following props:
           b-1. (require)columns: get columns 
           b-2. (require)data: get data from api call
           b-3. (optional)paginatorOptions: pagination table
           b-4. (optional)filterElement: show filter drawer 
           b-5. (optional)hasExportFile: export file 
           b-6. (optional)exportFileName: get name Excel file
           b-7. (optional)exportColumns: get title of Excel columns
           b-8. (optional)onExpand: show each ReactNode in expand table
           b-9. (optional)requiredSeachTable: for this type of table








