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

1. list without require input data

    1. `columns.tsx`: generate columns table with status column including: add && delete && update && ...

    2. `filter.tsx`: create object for generate content filter in drawer

    3. `header.tsx`: generate title and breadcrumb page

    4. `page.tsx`:

        1. api call: get data list

        2. useTable hook: generate all functionalities in table, like: pagination && handle table layout && actions
           /* for this handling must get : data && pageSize && totalElement && initialFilterValues */

        3. actionFilter function: api call per filter 

        4. Table component with following props:

           a: (require)columns: get columns 
           b: (require)data: get data from api call
           c: (optional)buttons: show each ReactNode in layout table 
           d: (optional)pageHeader: show title and breadcrumb page
           e: (optional)paginatorOptions: pagination table
           f: (optional)filterElement: show filter drawer 
           g: (optional)hasExportFile: export file 
           h: (optional)exportFileName: get name Excel file
           i: (optional)exportColumns: get title of Excel columns
           j: (optional)onExpand: show each ReactNode in expand table

2. list with require input data (inquiry-list)







