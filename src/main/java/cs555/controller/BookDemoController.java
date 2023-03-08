package cs555.controller;

import cs555.service.BookdemoService;
import cs555.util.ResultUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

/**
 * @Description: TODO
 * @Author: YourName
 * @Date: 2023/3/7
 **/

@RestController
@RequestMapping
public class BookDemoController {

    @Autowired
    private BookdemoService bookdemoService;

    @PostMapping("/bookdemo/insert")
    public Result add(@Valid @RequestBody Bookdemo bookdemo) {
        try {
            bookdemoService.insertBookdemo(bookdemo);
        } catch (Exception e) {
            e.printStackTrace();
            return ResultUtil.error(404, e.getMessage());
        }
        return ResultUtil.success();
    }


}
