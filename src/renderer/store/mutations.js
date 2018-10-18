export const SWITCH_CATALOG=(state,payload)=>{
    state.mainStore.catalogIndex=payload.index;
};//切换导航


export default {
    SWITCH_CATALOG
}