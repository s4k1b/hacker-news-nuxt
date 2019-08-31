export default {
  paginatedList(list, page) {
    const start = (page - 1) * 10
    const end = page * 10
    return list.slice(start, end)
  }
}
