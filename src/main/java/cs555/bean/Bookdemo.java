package cs555.bean;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.sql.Time;
import java.util.Date;

/**
 * @Description: TODO
 * @Author: YourName
 * @Date: 2023/3/7
 **/

@Data
public class Bookdemo implements Serializable {


    @NotEmpty(message = "could not be empty")
    private String name;

    @NotEmpty(message = "could not be empty")
    @Email(message = "invalid email")
    private String email;

    @NotEmpty(message = "could not be empty")
    private String contactNumber;

    @NotEmpty(message = "could not be empty")
    private String address;

    @NotNull(message = "could not be empty")
    @JsonFormat(pattern = "yyyy/MM/dd")
    private Date scheduleDate;

//    @NotEmpty(message = "could not be empty")
    private String scheduleTime;
}
