package cs555.bean;

/**
 * @Description: TODO
 * @Author: YourName
 * @Date: 2023/3/7
 **/
public enum  ResultEnum {

    SUCCESS(200,"Information stored successfully!"),
    FAILURE(404,"Fail"),
    ;
    private Integer code;
    private String msg;

    ResultEnum(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public Integer getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }

}
