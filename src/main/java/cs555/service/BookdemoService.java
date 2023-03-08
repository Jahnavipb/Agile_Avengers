package cs555.service;

import cs555.bean.Bookdemo;
import org.springframework.stereotype.Service;

/**
 * @Description: TODO
 * @Author: YourName
 * @Date: 2023/3/7
 **/

@Service
public interface BookdemoService {

    void insertBookdemo (Bookdemo bookdemo) ;

}
