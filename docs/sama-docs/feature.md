# Implement of new feature in Iva System Management (SAMA)

## list

directory structure: mkdir `src/app/(sama)/feature/list/*`

1.  `header.tsx`: generate title and breadcrumb page
2.  `columns.tsx`: generate columns table with status column including: add && delete && update && ...
    - Notice: if you need to handle update by modal view, check [update](#L75) section of this instruction
3.  `page.tsx`: two types of page

    - for list without require input fields to generate table

          1. api call: get data list

          2. handleDataChange function: api call by filters and pagination

          3. Table component with following props:
            - columns(required): get columns
            - data(required): get data from api and fix changes data after filter and pagination
            - handleDataChange(required): handle change data with api call and pagination and filter
            - isLoading(required): handle loading table
            - buttons(optional): show any ReactNode in layout table
            - filter(optional): show drawer filter
            - pageHeader(optional): show title and breadcrumb page
            - exportFile(optional): title of columns and name Excel file

    - for list with require input data (inquiry-list)

          1. add form for get my data response with api call

          2. actionFilter function: api call per filter

          3. Table component with following props:
            - columns(required): get columns
            - data(required): get data from api and fix changes data after filter and pagination
            - handleDataChange(required): handle change data with api call and pagination and filter
            - isLoading(required): handle loading table
            - filter(optional): show drawer filter
            - buttons(optional): show any ReactNode in layout table
            - exportFile(optional): title of columns and name Excel file
            - pageHeader(optional): show title and breadcrumb page
            - requiredSeachTable(optional): for this type of table

4.  `filter.tsx`: create object for generate content filter in drawer

## add

#### (app/(hydrogen)/feature/add)

1.  `header.tsx`: generate title and breadcrumb page

2.  `page.tsx`: add Form

## detail

#### (app/(hydrogen)/feature/detail)

1. `[id]/page.tsx`: show more data based on id

2. `collaps.tsx`: show any ReactNode (Optional)

3. `header.tsx`: generate title and breadcrumb page

## edit

#### (app/(hydrogen)/feature/edit)

1. `header.tsx`: generate title and breadcrumb page

2. `modal.tsx`: edit row in modal

3. `[id]/page.tsx`: edit data with api call (in case of form is too big)

## add feature to menu

1. (src\layouts\beryllium\beryllium-fixed-menu-items.tsx): add object
2. (src\config\routes.ts): add path to route
