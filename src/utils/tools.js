export const validateJSON = (jsonObj) => {
    try {
        JSON.parse(JSON.stringify(jsonObj));
        return true; // 验证通过
    } catch (error) {
        console.error('Invalid JSON:', error);
        return false; // 验证失败
    }
};