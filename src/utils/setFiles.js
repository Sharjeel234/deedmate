import dayjs from "dayjs";
const setFiles  = ( files ) =>{
    const filess = files?.map((file) => {
        return {
          ...file,
          id: file._id,
          uploadDate: `${dayjs(file.uploadDate).format("h:mm A")} ${dayjs(
            file.uploadDate
          ).format("DD-MM-YYYY")}`,
        };
    });
    return filess;
}

export default setFiles;