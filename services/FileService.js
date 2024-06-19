class FileService {
    uploadImage(filename) {
        // возвращает адрес расположения файла
        // при загрузке одной фотографии
        return {
            url: `uploads/${filename}`,
        }
    }

    uploadMultiImg(files) {
        const filesUrl = files
        ? files.map((img) => `uploads/${img.filename}`)
        : []
        return filesUrl
    }

    uploadImages(thumb, gallery) {
        // адрес расположения миниатюры
        const thumbUrl = thumb ? `uploads/${thumb.filename}` : ''
        // адреса расположения всех загруженных фотографий
        // с полем gallery
        const galleryUrl = gallery ? gallery.map((img) => `uploads/${img.filename}`)
        : []
        return {
            thumbUrl,
            galleryUrl
        }
    }
}

export const fileService = new FileService()