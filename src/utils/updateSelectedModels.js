//! Формуємо(оновлюємо) масив обраних моделей [selectedModels]:
// updateSelectedModels = () => idArr.flatMap(id => aircraftsArr.filter((el) => id === el.id)); //! без сортування
export const updateSelectedModels = (idArr, aircraftsArr) =>
    idArr.flatMap(id =>
        aircraftsArr.filter((el) => id === el.id))
        .sort((a, b) => a.name.brief.localeCompare(b.name.brief)); //! з сортуванням за полем "name.brief"