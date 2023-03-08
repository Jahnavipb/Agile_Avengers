package cs555.service.impl;

import cs555.bean.Bookdemo;
import cs555.dao.BookdemoDaoMapper;
import cs555.service.BookdemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @Description: TODO
 * @Author: YourName
 * @Date: 2023/3/7
 **/

@Component
public class BookdemoServiceImpl implements BookdemoService {

    @Autowired
    private BookdemoDaoMapper bookdemoDaoMapper;

    @Override
    public void insertBookdemo(Bookdemo bookdemo) {
        bookdemoDaoMapper.insertBookdemo(bookdemo);
    }
}
