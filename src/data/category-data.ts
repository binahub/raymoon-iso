"use client"
import { parameterMap } from "@/const/apiCalls";
import { useCategoryListMutation } from "@/provider/redux/apis/category.api";
import { useEffect } from "react";

const CategoryData = () => {
    const [list, { isLoading , isSuccess, isError, error, data }] = useCategoryListMutation();
    useEffect(() => {
      list(parameterMap)
    }, [list])
    
  return (
    { isLoading , isSuccess, isError, error, data }
  )
}

export default CategoryData
  