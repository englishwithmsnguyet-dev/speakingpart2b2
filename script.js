
// ==========================================================================
// TRANSLATION TOGGLE LOGIC & EXAM TRANSLATION MAP
// ==========================================================================
const PROMPT_TRANSLATIONS_MAP = {"Your foreign teacher is going to leave Vietnam. Your class wants to choose a gift for him. There are three options: a lotus picture, a Vietnamese coffee package, and a hand-made gift. Which one is the best choice?": "Giáo viên nước ngoài của bạn sắp rời Việt Nam. Lớp của bạn muốn chọn một món quà tặng thầy. Có 3 lựa chọn: <strong><em>bức tranh hoa sen</em></strong>, <strong><em>gói cà phê Việt Nam</em></strong>, và <strong><em>món quà làm thủ công (handmade)</em></strong>. Lựa chọn nào là tốt nhất?", "SITUATION 01: Your foreign teacher is going to leave Vietnam. Your class wants to choose a gift for him. There are three options: a lotus picture, a Vietnamese coffee package, and a hand-made gift. Which one is the best choice?": "Giáo viên nước ngoài của bạn sắp rời Việt Nam. Lớp của bạn muốn chọn một món quà tặng thầy. Có 3 lựa chọn: <strong><em>bức tranh hoa sen</em></strong>, <strong><em>gói cà phê Việt Nam</em></strong>, và <strong><em>món quà làm thủ công (handmade)</em></strong>. Lựa chọn nào là tốt nhất?", "Your class wants to choose a gift for your teacher. There are three choices: a handbag, shoes, and glasses. Which one would you choose?": "Lớp của bạn muốn chọn một món quà cho cô giáo nhân ngày Nhà giáo Việt Nam. Có 3 lựa chọn: <strong><em>túi xách</em></strong>, <strong><em>đôi giày</em></strong>, và <strong><em>chiếc kính mắt</em></strong>. Bạn sẽ chọn món quà nào?", "SITUATION 02: Your class wants to choose a gift for your teacher. There are three choices: a handbag, shoes, and glasses. Which one would you choose?": "Lớp của bạn muốn chọn một món quà cho cô giáo nhân ngày Nhà giáo Việt Nam. Có 3 lựa chọn: <strong><em>túi xách</em></strong>, <strong><em>đôi giày</em></strong>, và <strong><em>chiếc kính mắt</em></strong>. Bạn sẽ chọn món quà nào?", "Your friend’s birthday is coming up, and you want to buy him a special gift. You have three options to choose from: a watch, a pair of headphones, or a picture frame. Which one would you choose, and why?": "Sắp đến sinh nhật của bạn bạn, và bạn muốn mua tặng anh ấy một món quà đặc biệt. Bạn có 3 phương án để chọn: <strong><em>đồng hồ đeo tay</em></strong>, <strong><em>tai nghe</em></strong>, hoặc <strong><em>khung ảnh</em></strong>. Bạn sẽ chọn món quà nào và tại sao?", "SITUATION 03: Your friend’s birthday is coming up, and you want to buy him a special gift. You have three options to choose from: a watch, a pair of headphones, or a picture frame. Which one would you choose, and why?": "Sắp đến sinh nhật của bạn bạn, và bạn muốn mua tặng anh ấy một món quà đặc biệt. Bạn có 3 phương án để chọn: <strong><em>đồng hồ đeo tay</em></strong>, <strong><em>tai nghe</em></strong>, hoặc <strong><em>khung ảnh</em></strong>. Bạn sẽ chọn món quà nào và tại sao?", "You want to choose a gift for your colleague who is retiring next week Three gifts are considered: a handmade gift, a movie ticket, or a book. Which one do you choose?": "Bạn của bạn sắp kết hôn, và bạn muốn tặng một món quà cưới ý nghĩa. Có 3 phương án: <strong><em>bộ đồ dùng nhà bếp</em></strong>, <strong><em>album ảnh cưới</em></strong>, và <strong><em>tiền mừng</em></strong>. Bạn nghĩ lựa chọn nào là phù hợp nhất?", "SITUATION 04: You want to choose a gift for your colleague who is retiring next week Three gifts are considered: a handmade gift, a movie ticket, or a book. Which one do you choose?": "Bạn của bạn sắp kết hôn, và bạn muốn tặng một món quà cưới ý nghĩa. Có 3 phương án: <strong><em>bộ đồ dùng nhà bếp</em></strong>, <strong><em>album ảnh cưới</em></strong>, và <strong><em>tiền mừng</em></strong>. Bạn nghĩ lựa chọn nào là phù hợp nhất?", "Your friend is going to do military service. You are thinking about a gift for him. There are three options: a game, a book, and a diary. Which one would you choose?": "Lớp bạn muốn tặng một món quà cho một người bạn cùng lớp sắp chuyển sang trường mới. Ba phương án được đưa ra: <strong><em>cuốn sổ lưu bút có ảnh kỷ niệm của lớp</em></strong>, <strong><em>chiếc ba lô thời trang</em></strong>, và <strong><em>chiếc bút khắc tên kỷ niệm</em></strong>. Lựa chọn nào là tốt nhất?", "SITUATION 05: Your friend is going to do military service. You are thinking about a gift for him. There are three options: a game, a book, and a diary. Which one would you choose?": "Lớp bạn muốn tặng một món quà cho một người bạn cùng lớp sắp chuyển sang trường mới. Ba phương án được đưa ra: <strong><em>cuốn sổ lưu bút có ảnh kỷ niệm của lớp</em></strong>, <strong><em>chiếc ba lô thời trang</em></strong>, và <strong><em>chiếc bút khắc tên kỷ niệm</em></strong>. Lựa chọn nào là tốt nhất?", "Your nephew will visit your hometown. You are going to give him a gift. There are three options: a robot, an English comic book, or a school bag. Which one do you think is the best choice?": "Bạn của bạn vừa chuyển đến một căn hộ mới, và bạn muốn mua tặng cô ấy một món quà tân gia. Bạn đang cân nhắc giữa: <strong><em>cây cảnh trong nhà</em></strong>, <strong><em>bộ nến thơm</em></strong>, và <strong><em>bức tranh treo tường</em></strong>. Bạn sẽ khuyên cô ấy chọn món nào?", "SITUATION 06: Your nephew will visit your hometown. You are going to give him a gift. There are three options: a robot, an English comic book, or a school bag. Which one do you think is the best choice?": "Bạn của bạn vừa chuyển đến một căn hộ mới, và bạn muốn mua tặng cô ấy một món quà tân gia. Bạn đang cân nhắc giữa: <strong><em>cây cảnh trong nhà</em></strong>, <strong><em>bộ nến thơm</em></strong>, và <strong><em>bức tranh treo tường</em></strong>. Bạn sẽ khuyên cô ấy chọn món nào?", "Your friend had an accident and he has to stay in the hospital for a week. You are thinking about a gift for him. There are three options: flowers, a set of crayons and a drawing book, or some healthy snacks. Which one will you choose?": "Lớp bạn muốn mua một món quà chia tay cho một học sinh trao đổi quốc tế sắp trở về nước. Có 3 lựa chọn: <strong><em>nón lá truyền thống Việt Nam</em></strong>, <strong><em>hộp trà Việt Nam</em></strong>, và <strong><em>chiếc áo dài</em></strong>. Món quà nào là ý nghĩa nhất?", "SITUATION 07: Your friend had an accident and he has to stay in the hospital for a week. You are thinking about a gift for him. There are three options: flowers, a set of crayons and a drawing book, or some healthy snacks. Which one will you choose?": "Lớp bạn muốn mua một món quà chia tay cho một học sinh trao đổi quốc tế sắp trở về nước. Có 3 lựa chọn: <strong><em>nón lá truyền thống Việt Nam</em></strong>, <strong><em>hộp trà Việt Nam</em></strong>, và <strong><em>chiếc áo dài</em></strong>. Món quà nào là ý nghĩa nhất?", "Your cousin has just ranked first in his class. His parents want to give him a special gift. They’re considering three options: buying him a laptop, giving him a trip, or buying him a motorbike. Which one would you suggest?": "Em gái của bạn vừa tốt nghiệp đại học, và bạn muốn mua tặng cô ấy một món quà chúc mừng. Bạn có 3 lựa chọn: <strong><em>máy tính xách tay mới</em></strong>, <strong><em>chuyến du lịch ngắn ngày</em></strong>, và <strong><em>bộ trang phục công sở chuyên nghiệp</em></strong>. Bạn sẽ chọn gì?", "SITUATION 08: Your cousin has just ranked first in his class. His parents want to give him a special gift. They’re considering three options: buying him a laptop, giving him a trip, or buying him a motorbike. Which one would you suggest?": "Em gái của bạn vừa tốt nghiệp đại học, và bạn muốn mua tặng cô ấy một món quà chúc mừng. Bạn có 3 lựa chọn: <strong><em>máy tính xách tay mới</em></strong>, <strong><em>chuyến du lịch ngắn ngày</em></strong>, và <strong><em>bộ trang phục công sở chuyên nghiệp</em></strong>. Bạn sẽ chọn gì?", "Your nephew has just turned 13, and you want to give him a special gift. You are considering three options: a guitar, an MP3 player, or a set of comic books. Which one would you choose?": "Anh trai của bạn sắp đi du học nước ngoài, và gia đình bạn muốn tặng anh ấy một món quà thiết thực. Ba phương án là: <strong><em>nồi cơm điện mini</em></strong>, <strong><em>áo khoác mùa đông ấm áp</em></strong>, và <strong><em>vali chất lượng cao</em></strong>. Bạn sẽ chọn phương án nào?", "SITUATION 09: Your nephew has just turned 13, and you want to give him a special gift. You are considering three options: a guitar, an MP3 player, or a set of comic books. Which one would you choose?": "Anh trai của bạn sắp đi du học nước ngoài, và gia đình bạn muốn tặng anh ấy một món quà thiết thực. Ba phương án là: <strong><em>nồi cơm điện mini</em></strong>, <strong><em>áo khoác mùa đông ấm áp</em></strong>, và <strong><em>vali chất lượng cao</em></strong>. Bạn sẽ chọn phương án nào?", "Your niece is turning twelve years old next week. You are thinking about what to give her. There are three options: a dress, an English book, and a bunch of flowers. Which one is the best choice?": "Bạn muốn tặng mẹ một món quà ý nghĩa nhân ngày sinh nhật. Có 3 phương án: <strong><em>chiếc khăn lụa</em></strong>, <strong><em>chuyến đi spa chăm sóc sức khỏe</em></strong>, và <strong><em>bữa tối tự nấu tại nhà</em></strong>. Món quà nào là tuyệt vời nhất?", "SITUATION 10: Your niece is turning twelve years old next week. You are thinking about what to give her. There are three options: a dress, an English book, and a bunch of flowers. Which one is the best choice?": "Bạn muốn tặng mẹ một món quà ý nghĩa nhân ngày sinh nhật. Có 3 phương án: <strong><em>chiếc khăn lụa</em></strong>, <strong><em>chuyến đi spa chăm sóc sức khỏe</em></strong>, và <strong><em>bữa tối tự nấu tại nhà</em></strong>. Món quà nào là tuyệt vời nhất?", "Your friend, who is a musician, is having his first song published next month. You want to buy him a gift to celebrate this special occasion. There are three choices: a bouquet of flowers, a handmade card, and a notebook.": "Một người bạn làm nhạc sĩ của bạn sắp phát hành bài hát đầu tay vào tháng tới. Bạn muốn mua tặng anh ấy một món quà chúc mừng dịp đặc biệt này. Có 3 phương án: <strong><em>bó hoa tươi</em></strong>, <strong><em>tấm thiệp tự làm</em></strong>, và <strong><em>cuốn sổ tay</em></strong>. Bạn sẽ chọn gì?", "SITUATION 11: Your friend, who is a musician, is having his first song published next month. You want to buy him a gift to celebrate this special occasion. There are three choices: a bouquet of flowers, a handmade card, and a notebook.": "Một người bạn làm nhạc sĩ của bạn sắp phát hành bài hát đầu tay vào tháng tới. Bạn muốn mua tặng anh ấy một món quà chúc mừng dịp đặc biệt này. Có 3 phương án: <strong><em>bó hoa tươi</em></strong>, <strong><em>tấm thiệp tự làm</em></strong>, và <strong><em>cuốn sổ tay</em></strong>. Bạn sẽ chọn gì?", "You are going to choose a birthday gift for your father. There are three choices: a tie, a bottle of champagne, and a puppy. Which one would you choose?": "Sắp đến sinh nhật 10 tuổi của cháu trai bạn, và bạn muốn tặng cậu bé một món quà thú vị. Ba phương án là: <strong><em>bộ đồ chơi ghép hình Lego</em></strong>, <strong><em>chiếc xe đạp</em></strong>, và <strong><em>bộ sách truyện tranh khoa học</em></strong>. Lựa chọn nào là tốt nhất?", "SITUATION 12: You are going to choose a birthday gift for your father. There are three choices: a tie, a bottle of champagne, and a puppy. Which one would you choose?": "Sắp đến sinh nhật 10 tuổi của cháu trai bạn, và bạn muốn tặng cậu bé một món quà thú vị. Ba phương án là: <strong><em>bộ đồ chơi ghép hình Lego</em></strong>, <strong><em>chiếc xe đạp</em></strong>, và <strong><em>bộ sách truyện tranh khoa học</em></strong>. Lựa chọn nào là tốt nhất?", "Vietnamese Teachers' Day is coming, and your class wants to give your teacher a special gift. You are considering three options: organizing a small party, making a thank-you video, and giving a handmade card. Which is the best choice?": "Bạn của bạn vừa được thăng chức tại công ty, và bạn muốn tặng một món quà chúc mừng thành công. Ba phương án là: <strong><em>chiếc bút ký cao cấp</em></strong>, <strong><em>cặp da công sở</em></strong>, và <strong><em>bình giữ nhiệt</em></strong>. Bạn sẽ chọn món quà nào?", "SITUATION 13: Vietnamese Teachers' Day is coming, and your class wants to give your teacher a special gift. You are considering three options: organizing a small party, making a thank-you video, and giving a handmade card. Which is the best choice?": "Bạn của bạn vừa được thăng chức tại công ty, và bạn muốn tặng một món quà chúc mừng thành công. Ba phương án là: <strong><em>chiếc bút ký cao cấp</em></strong>, <strong><em>cặp da công sở</em></strong>, và <strong><em>bình giữ nhiệt</em></strong>. Bạn sẽ chọn món quà nào?", "You are choosing a gift for your foreign friend to represent Vietnamese culture. You have three options: some lotus flowers, an Ao Dai, or a conical hat. Which one would you choose?": "Bạn muốn tặng một món quà lưu niệm cho một người bạn ngoại quốc lần đầu đến thăm thành phố của bạn. Ba phương án là: <strong><em>bộ bưu thiếp phong cảnh địa phương</em></strong>, <strong><em>hộp bánh đặc sản truyền thống</em></strong>, và <strong><em>móc chìa khóa thủ công</em></strong>. Lựa chọn nào là thích hợp nhất?", "SITUATION 14: You are choosing a gift for your foreign friend to represent Vietnamese culture. You have three options: some lotus flowers, an Ao Dai, or a conical hat. Which one would you choose?": "Bạn muốn tặng một món quà lưu niệm cho một người bạn ngoại quốc lần đầu đến thăm thành phố của bạn. Ba phương án là: <strong><em>bộ bưu thiếp phong cảnh địa phương</em></strong>, <strong><em>hộp bánh đặc sản truyền thống</em></strong>, và <strong><em>móc chìa khóa thủ công</em></strong>. Lựa chọn nào là thích hợp nhất?", "You are planning a weekend vacation. There are three options: going to the beach, visiting the mountains, and exploring a city with museums and cafés. Which one is the best choice for you?": "Bạn sắp có một ngày nghỉ vào thứ Tư tuần tới và lên kế hoạch làm điều gì đó cùng gia đình. Có 3 hoạt động được cân nhắc: <strong><em>về vùng quê</em></strong>, <strong><em>đi xem phim</em></strong>, và <strong><em>đi mua sắm</em></strong>. Bạn nghĩ hoạt động nào là tốt nhất?", "SITUATION 01: You are planning a weekend vacation. There are three options: going to the beach, visiting the mountains, and exploring a city with museums and cafés. Which one is the best choice for you?": "Bạn sắp có một ngày nghỉ vào thứ Tư tuần tới và lên kế hoạch làm điều gì đó cùng gia đình. Có 3 hoạt động được cân nhắc: <strong><em>về vùng quê</em></strong>, <strong><em>đi xem phim</em></strong>, và <strong><em>đi mua sắm</em></strong>. Bạn nghĩ hoạt động nào là tốt nhất?", "You have some free time in the evening and want to do something to relax. Three activities are considered: reading a book, watching TV, and going for a walk. Which one would you choose?": "Nhóm bạn của bạn muốn tổ chức một hoạt động vào cuối tuần này để thư giãn sau kỳ thi căng thẳng. Có 3 phương án: <strong><em>tổ chức tiệc dã ngoại nướng ngoài trời (BBQ)</em></strong>, <strong><em>đi hát karaoke</em></strong>, và <strong><em>chơi trò chơi thể thao ngoài trời</em></strong>. Bạn sẽ chọn gì?", "SITUATION 02: You have some free time in the evening and want to do something to relax. Three activities are considered: reading a book, watching TV, and going for a walk. Which one would you choose?": "Nhóm bạn của bạn muốn tổ chức một hoạt động vào cuối tuần này để thư giãn sau kỳ thi căng thẳng. Có 3 phương án: <strong><em>tổ chức tiệc dã ngoại nướng ngoài trời (BBQ)</em></strong>, <strong><em>đi hát karaoke</em></strong>, và <strong><em>chơi trò chơi thể thao ngoài trời</em></strong>. Bạn sẽ chọn gì?", "You are thinking about how to spend your weekend. There are three options: going out with your family, hanging out with friends, and relaxing alone at home. Which one is the best choice?": "Câu lạc bộ tiếng Anh của bạn muốn tổ chức một sự kiện để thu hút thêm thành viên mới. Ba phương án là: <strong><em>buổi thi hùng biện tiếng Anh</em></strong>, <strong><em>buổi xem phim tiếng Anh kèm thảo luận</em></strong>, và <strong><em>buổi giao lưu ca nhạc tiếng Anh</em></strong>. Hoạt động nào hiệu quả nhất?", "SITUATION 03: You are thinking about how to spend your weekend. There are three options: going out with your family, hanging out with friends, and relaxing alone at home. Which one is the best choice?": "Câu lạc bộ tiếng Anh của bạn muốn tổ chức một sự kiện để thu hút thêm thành viên mới. Ba phương án là: <strong><em>buổi thi hùng biện tiếng Anh</em></strong>, <strong><em>buổi xem phim tiếng Anh kèm thảo luận</em></strong>, và <strong><em>buổi giao lưu ca nhạc tiếng Anh</em></strong>. Hoạt động nào hiệu quả nhất?", "Your friend is coming to visit your house next week. You are thinking of a cosy dinner with your friend. Three options are: cooking at home, ordering food from a restaurant, and eating out at a restaurant. Which option would you choose?": "Bạn và bạn bè đang lên kế hoạch cho chuyến đi nghỉ hè. Có 3 hoạt động được đề xuất: <strong><em>cắm trại trên núi</em></strong>, <strong><em>nghỉ dưỡng tại bãi biển</em></strong>, và <strong><em>tham quan thành phố lịch sử</em></strong>. Bạn thích lựa chọn nào nhất?", "SITUATION 04: Your friend is coming to visit your house next week. You are thinking of a cosy dinner with your friend. Three options are: cooking at home, ordering food from a restaurant, and eating out at a restaurant. Which option would you choose?": "Bạn và bạn bè đang lên kế hoạch cho chuyến đi nghỉ hè. Có 3 hoạt động được đề xuất: <strong><em>cắm trại trên núi</em></strong>, <strong><em>nghỉ dưỡng tại bãi biển</em></strong>, và <strong><em>tham quan thành phố lịch sử</em></strong>. Bạn thích lựa chọn nào nhất?", "You are considering what to do during a 15-minute break. There are three options: reading a book, talking with friends, and doing exercise. Which one is the best choice for you?": "Trường học của bạn muốn tổ chức một hoạt động vì cộng đồng vào cuối tuần. Ba phương án được đưa ra: <strong><em>dọn dẹp rác tại công viên địa phương</em></strong>, <strong><em>thăm và tặng quà tại viện dưỡng lão</em></strong>, và <strong><em>tổ chức hội chợ gây quỹ từ thiện</em></strong>. Bạn chọn hoạt động nào?", "SITUATION 05: You are considering what to do during a 15-minute break. There are three options: reading a book, talking with friends, and doing exercise. Which one is the best choice for you?": "Trường học của bạn muốn tổ chức một hoạt động vì cộng đồng vào cuối tuần. Ba phương án được đưa ra: <strong><em>dọn dẹp rác tại công viên địa phương</em></strong>, <strong><em>thăm và tặng quà tại viện dưỡng lão</em></strong>, và <strong><em>tổ chức hội chợ gây quỹ từ thiện</em></strong>. Bạn chọn hoạt động nào?", "You have two days off and want to make the most of your time. Three activities are considered: staying at home, traveling abroad, and hiking with your friends. Which one would you choose?": "Công ty bạn muốn tổ chức một chuyến đi dã ngoại gắn kết đồng đội (team-building). Ba hoạt động được xem xét: <strong><em>trò chơi sinh tồn và giải mật thư trong rừng</em></strong>, <strong><em>thi nấu ăn tập thể</em></strong>, và <strong><em>chèo thuyền kayak trên sông</em></strong>. Lựa chọn nào phù hợp nhất?", "SITUATION 06: You have two days off and want to make the most of your time. Three activities are considered: staying at home, traveling abroad, and hiking with your friends. Which one would you choose?": "Công ty bạn muốn tổ chức một chuyến đi dã ngoại gắn kết đồng đội (team-building). Ba hoạt động được xem xét: <strong><em>trò chơi sinh tồn và giải mật thư trong rừng</em></strong>, <strong><em>thi nấu ăn tập thể</em></strong>, và <strong><em>chèo thuyền kayak trên sông</em></strong>. Lựa chọn nào phù hợp nhất?", "Your friend wants to learn a new skill after work, but she doesn't have much free time. She is considering three options: painting, gardening, and knitting. Which one would you choose?": "Bạn của bạn muốn học một kỹ năng mới sau giờ làm nhưng không có nhiều thời gian rảnh. Cô ấy đang cân nhắc: <strong><em>học vẽ tranh</em></strong>, <strong><em>học làm vườn</em></strong>, và <strong><em>học đan len</em></strong>. Bạn sẽ khuyên cô ấy chọn môn nào?", "SITUATION 07: Your friend wants to learn a new skill after work, but she doesn't have much free time. She is considering three options: painting, gardening, and knitting. Which one would you choose?": "Bạn của bạn muốn học một kỹ năng mới sau giờ làm nhưng không có nhiều thời gian rảnh. Cô ấy đang cân nhắc: <strong><em>học vẽ tranh</em></strong>, <strong><em>học làm vườn</em></strong>, và <strong><em>học đan len</em></strong>. Bạn sẽ khuyên cô ấy chọn môn nào?", "Your friend feels very stressed with study and wants to do something. Which one would you recommend her: taking a sport, learning new soft skills, and doing volunteer work?": "Bạn và gia đình muốn dành buổi tối chủ nhật cùng nhau. Ba phương án là: <strong><em>cùng nấu một bữa tối đặc biệt</em></strong>, <strong><em>chơi cờ và trò chơi board game tại nhà</em></strong>, và <strong><em>đi dạo tại phố đi bộ</em></strong>. Hoạt động nào là thú vị nhất?", "SITUATION 08: Your friend feels very stressed with study and wants to do something. Which one would you recommend her: taking a sport, learning new soft skills, and doing volunteer work?": "Bạn và gia đình muốn dành buổi tối chủ nhật cùng nhau. Ba phương án là: <strong><em>cùng nấu một bữa tối đặc biệt</em></strong>, <strong><em>chơi cờ và trò chơi board game tại nhà</em></strong>, và <strong><em>đi dạo tại phố đi bộ</em></strong>. Hoạt động nào là thú vị nhất?", "Your friend wants to do something new to relax. There are three options: making a cake, going to a painting workshop, or learning a new language. Which one do you think is the best choice?": "Trường đại học của bạn muốn tổ chức một hoạt động thể thao chào đón tân sinh viên. Có 3 môn thể thao được đề xuất: <strong><em>giải bóng đá mini</em></strong>, <strong><em>giải cầu lông</em></strong>, và <strong><em>ngày hội chạy bộ gây quỹ</em></strong>. Bạn ủng hộ lựa chọn nào?", "SITUATION 09: Your friend wants to do something new to relax. There are three options: making a cake, going to a painting workshop, or learning a new language. Which one do you think is the best choice?": "Trường đại học của bạn muốn tổ chức một hoạt động thể thao chào đón tân sinh viên. Có 3 môn thể thao được đề xuất: <strong><em>giải bóng đá mini</em></strong>, <strong><em>giải cầu lông</em></strong>, và <strong><em>ngày hội chạy bộ gây quỹ</em></strong>. Bạn ủng hộ lựa chọn nào?", "Your sister lost her confidence. You are thinking about a way she can gain confidence. There are three choices: joining a summer camp, doing volunteer work, and joining a speaking contest. Which one would you recommend?": "Bạn muốn rèn luyện một thói quen lành mạnh mỗi sáng trước khi đi học hoặc đi làm. Ba phương án là: <strong><em>tập yoga 20 phút</em></strong>, <strong><em>chạy bộ quanh công viên</em></strong>, và <strong><em>đọc sách phát triển bản thân</em></strong>. Bạn sẽ chọn hoạt động nào?", "SITUATION 10: Your sister lost her confidence. You are thinking about a way she can gain confidence. There are three choices: joining a summer camp, doing volunteer work, and joining a speaking contest. Which one would you recommend?": "Bạn muốn rèn luyện một thói quen lành mạnh mỗi sáng trước khi đi học hoặc đi làm. Ba phương án là: <strong><em>tập yoga 20 phút</em></strong>, <strong><em>chạy bộ quanh công viên</em></strong>, và <strong><em>đọc sách phát triển bản thân</em></strong>. Bạn sẽ chọn hoạt động nào?", "Your family is discussing where your 7th-grade nephew will spend his summer holiday: joining a camp, doing military training, or staying with his grandparents in the countryside. Which one is the best choice for him?": "Lớp bạn muốn tổ chức tiệc chia tay cuối năm học. Ba ý tưởng được đề xuất: <strong><em>đặt tiệc tại nhà hàng</em></strong>, <strong><em>tổ chức tiệc ngọt tại lớp học</em></strong>, và <strong><em>chuyến du lịch dã ngoại trong ngày</em></strong>. Lựa chọn nào đáng nhớ nhất?", "SITUATION 11: Your family is discussing where your 7th-grade nephew will spend his summer holiday: joining a camp, doing military training, or staying with his grandparents in the countryside. Which one is the best choice for him?": "Lớp bạn muốn tổ chức tiệc chia tay cuối năm học. Ba ý tưởng được đề xuất: <strong><em>đặt tiệc tại nhà hàng</em></strong>, <strong><em>tổ chức tiệc ngọt tại lớp học</em></strong>, và <strong><em>chuyến du lịch dã ngoại trong ngày</em></strong>. Lựa chọn nào đáng nhớ nhất?", "You are going to have three days off. You are planning to do something to relax. There are three options: going to the beach, going hiking, and going to a big city. Which one will you choose?": "Bạn có một buổi chiều rảnh rỗi một mình và muốn thư giãn tâm trí. Ba lựa chọn là: <strong><em>đến một quán cà phê yên tĩnh đọc sách</em></strong>, <strong><em>đi dạo quanh hồ ngắm cảnh</em></strong>, và <strong><em>thăm viện bảo tàng nghệ thuật</em></strong>. Bạn sẽ làm gì?", "SITUATION 12: You are going to have three days off. You are planning to do something to relax. There are three options: going to the beach, going hiking, and going to a big city. Which one will you choose?": "Bạn có một buổi chiều rảnh rỗi một mình và muốn thư giãn tâm trí. Ba lựa chọn là: <strong><em>đến một quán cà phê yên tĩnh đọc sách</em></strong>, <strong><em>đi dạo quanh hồ ngắm cảnh</em></strong>, và <strong><em>thăm viện bảo tàng nghệ thuật</em></strong>. Bạn sẽ làm gì?", "You want to celebrate your birthday in a special way this year. You are considering three options: having a small party at home, going on a short trip with close friends, or spending the day volunteering. Which one would you choose?": "Nhóm bạn thân của bạn muốn học cùng nhau vào dịp cuối tuần. Ba phương án địa điểm/hoạt động: <strong><em>học nhóm tại thư viện thành phố</em></strong>, <strong><em>học tại quán cà phê học tập</em></strong>, và <strong><em>học online qua video call tại nhà</em></strong>. Phương án nào hiệu quả nhất?", "SITUATION 13: You want to celebrate your birthday in a special way this year. You are considering three options: having a small party at home, going on a short trip with close friends, or spending the day volunteering. Which one would you choose?": "Nhóm bạn thân của bạn muốn học cùng nhau vào dịp cuối tuần. Ba phương án địa điểm/hoạt động: <strong><em>học nhóm tại thư viện thành phố</em></strong>, <strong><em>học tại quán cà phê học tập</em></strong>, và <strong><em>học online qua video call tại nhà</em></strong>. Phương án nào hiệu quả nhất?", "You and your friends are planning a short holiday in Vietnam. You are considering three options: visiting Can Tho to explore the floating markets, going to Vung Tau for a beach trip, or hiking in Da Lat. Which place would you choose?": "Bạn muốn tổ chức sinh nhật cho chính mình cùng bạn bè. Ba phương án: <strong><em>tổ chức bữa tiệc ấm cúng tại nhà</em></strong>, <strong><em>đi ăn lẩu nướng tại trung tâm thương mại</em></strong>, và <strong><em>đi xem một buổi hòa nhạc</em></strong>. Bạn sẽ chọn cách nào?", "SITUATION 14: You and your friends are planning a short holiday in Vietnam. You are considering three options: visiting Can Tho to explore the floating markets, going to Vung Tau for a beach trip, or hiking in Da Lat. Which place would you choose?": "Bạn muốn tổ chức sinh nhật cho chính mình cùng bạn bè. Ba phương án: <strong><em>tổ chức bữa tiệc ấm cúng tại nhà</em></strong>, <strong><em>đi ăn lẩu nướng tại trung tâm thương mại</em></strong>, và <strong><em>đi xem một buổi hòa nhạc</em></strong>. Bạn sẽ chọn cách nào?", "Your English friend is visiting Vietnam on his summer vacation. Three places are considered: a mountainous town, a coastal city, and an ancient town. Which one would you recommend?": "Gia đình bạn muốn đi du lịch vào kỳ nghỉ lễ sắp tới. Ba điểm đến được cân nhắc: <strong><em>thành phố biển Đà Nẵng</em></strong>, <strong><em>thị trấn miền núi Sa Pa</em></strong>, và <strong><em>cố đô Huế cổ kính</em></strong>. Bạn nghĩ địa điểm nào là lý tưởng nhất?", "SITUATION 01: Your English friend is visiting Vietnam on his summer vacation. Three places are considered: a mountainous town, a coastal city, and an ancient town. Which one would you recommend?": "Gia đình bạn muốn đi du lịch vào kỳ nghỉ lễ sắp tới. Ba điểm đến được cân nhắc: <strong><em>thành phố biển Đà Nẵng</em></strong>, <strong><em>thị trấn miền núi Sa Pa</em></strong>, và <strong><em>cố đô Huế cổ kính</em></strong>. Bạn nghĩ địa điểm nào là lý tưởng nhất?", "You are going to have a short trip with your family. You are considering three choices: a water park, a museum, and an eco-tourism site. Which one would you choose?": "Bạn và nhóm bạn cần chọn địa điểm tổ chức họp nhóm chuẩn bị bài thuyết trình. Ba lựa chọn: <strong><em>quán cà phê yên tĩnh</em></strong>, <strong><em>thư viện trường đại học</em></strong>, và <strong><em>phòng tự học tại nhà một thành viên</em></strong>. Nơi nào phù hợp nhất?", "SITUATION 02: You are going to have a short trip with your family. You are considering three choices: a water park, a museum, and an eco-tourism site. Which one would you choose?": "Bạn và nhóm bạn cần chọn địa điểm tổ chức họp nhóm chuẩn bị bài thuyết trình. Ba lựa chọn: <strong><em>quán cà phê yên tĩnh</em></strong>, <strong><em>thư viện trường đại học</em></strong>, và <strong><em>phòng tự học tại nhà một thành viên</em></strong>. Nơi nào phù hợp nhất?", "Your class is planning to hold a reunion party. Three places are suggested: a restaurant, a coffee shop, or your teacher’s house. Which one would you choose?": "Bạn muốn tìm một nơi làm việc từ xa (remote work) trong một tháng để thay đổi không khí. Ba lựa chọn: <strong><em>thành phố Đà Lạt ngàn hoa</em></strong>, <strong><em>phố cổ Hội An thanh bình</em></strong>, và <strong><em>thành phố biển Nha Trang sôi động</em></strong>. Bạn sẽ chọn nơi nào?", "SITUATION 03: Your class is planning to hold a reunion party. Three places are suggested: a restaurant, a coffee shop, or your teacher’s house. Which one would you choose?": "Bạn muốn tìm một nơi làm việc từ xa (remote work) trong một tháng để thay đổi không khí. Ba lựa chọn: <strong><em>thành phố Đà Lạt ngàn hoa</em></strong>, <strong><em>phố cổ Hội An thanh bình</em></strong>, và <strong><em>thành phố biển Nha Trang sôi động</em></strong>. Bạn sẽ chọn nơi nào?", "Your neighbor wants to spend more quality time with her 11-year-old son. She is considering three places to take him: a park, a science center, or the beach.\nWhich place would you recommend?": "Lớp bạn muốn chọn địa điểm chụp kỷ yếu tốt nghiệp. Ba phương án: <strong><em>khuôn viên trường học thân quen</em></strong>, <strong><em>công viên sinh thái ngoài trời</em></strong>, và <strong><em>phim trường ảnh chuyên nghiệp</em></strong>. Nơi nào cho bộ ảnh đẹp nhất?", "SITUATION 04: Your neighbor wants to spend more quality time with her 11-year-old son. She is considering three places to take him: a park, a science center, or the beach.\nWhich place would you recommend?": "Lớp bạn muốn chọn địa điểm chụp kỷ yếu tốt nghiệp. Ba phương án: <strong><em>khuôn viên trường học thân quen</em></strong>, <strong><em>công viên sinh thái ngoài trời</em></strong>, và <strong><em>phim trường ảnh chuyên nghiệp</em></strong>. Nơi nào cho bộ ảnh đẹp nhất?", "A foreign friend is going to visit Vietnam in August for 3 days. Three places are suggested: Hanoi, Ho Chi Minh City, or Hue. Which one would you recommned?": "Công ty bạn cần chọn địa điểm tổ chức hội nghị khách hàng cuối năm. Ba lựa chọn: <strong><em>trung tâm hội nghị cao cấp</em></strong>, <strong><em>khách sạn 5 sao ven sông</em></strong>, và <strong><em>khu nghỉ dưỡng sinh thái ngoại ô</em></strong>. Địa điểm nào là trang trọng nhất?", "SITUATION 05: A foreign friend is going to visit Vietnam in August for 3 days. Three places are suggested: Hanoi, Ho Chi Minh City, or Hue. Which one would you recommned?": "Công ty bạn cần chọn địa điểm tổ chức hội nghị khách hàng cuối năm. Ba lựa chọn: <strong><em>trung tâm hội nghị cao cấp</em></strong>, <strong><em>khách sạn 5 sao ven sông</em></strong>, và <strong><em>khu nghỉ dưỡng sinh thái ngoại ô</em></strong>. Địa điểm nào là trang trọng nhất?", "You are going to take an exam. You are thinking of a place to study for exams. There are three choices: in your bedroom, in the school library, and in the coffee shop. Which one would you choose?": "Bạn muốn chọn một nơi để tổ chức tiệc sinh nhật cho người yêu. Ba phương án: <strong><em>nhà hàng tầng thượng ngắm hoàng hôn</em></strong>, <strong><em>quán cà phê ấm cúng ven hồ</em></strong>, và <strong><em>không gian trang trí lãng mạn tại nhà</em></strong>. Bạn chọn nơi nào?", "SITUATION 06: You are going to take an exam. You are thinking of a place to study for exams. There are three choices: in your bedroom, in the school library, and in the coffee shop. Which one would you choose?": "Bạn muốn chọn một nơi để tổ chức tiệc sinh nhật cho người yêu. Ba phương án: <strong><em>nhà hàng tầng thượng ngắm hoàng hôn</em></strong>, <strong><em>quán cà phê ấm cúng ven hồ</em></strong>, và <strong><em>không gian trang trí lãng mạn tại nhà</em></strong>. Bạn chọn nơi nào?", "Your foreign friend has come to Vietnam. You are thinking of a place to suggest him to travel. Which option is the best choice: Đà Nẵng, Hồ Chí Minh, and Hà Nội?": "Bạn của bạn muốn mở một quán cà phê nhỏ và đang tìm vị trí thuê mặt bằng. Ba phương án: <strong><em>gần các trường đại học</em></strong>, <strong><em>trong khu văn phòng công sở</em></strong>, và <strong><em>trong một con hẻm yên tĩnh phong cách nghệ thuật</em></strong>. Bạn sẽ khuyên vị trí nào?", "SITUATION 07: Your foreign friend has come to Vietnam. You are thinking of a place to suggest him to travel. Which option is the best choice: Đà Nẵng, Hồ Chí Minh, and Hà Nội?": "Bạn của bạn muốn mở một quán cà phê nhỏ và đang tìm vị trí thuê mặt bằng. Ba phương án: <strong><em>gần các trường đại học</em></strong>, <strong><em>trong khu văn phòng công sở</em></strong>, và <strong><em>trong một con hẻm yên tĩnh phong cách nghệ thuật</em></strong>. Bạn sẽ khuyên vị trí nào?", "Your class wants to hold a farewell party to say goodbye to your English teacher. Your class is considering where to hold it: in the classroom, in the teacher’s house, and in a restaurant. Which one is the best choice?": "Gia đình bạn muốn chuyển nhà và đang chọn nơi sinh sống mới. Ba lựa chọn: <strong><em>căn hộ chung cư cao cấp ở trung tâm</em></strong>, <strong><em>nhà phố liền kề ở vùng ven thoáng đãng</em></strong>, và <strong><em>nhà vườn ngoại ô yên tĩnh</em></strong>. Lựa chọn nào phù hợp cho gia đình?", "SITUATION 08: Your class wants to hold a farewell party to say goodbye to your English teacher. Your class is considering where to hold it: in the classroom, in the teacher’s house, and in a restaurant. Which one is the best choice?": "Gia đình bạn muốn chuyển nhà và đang chọn nơi sinh sống mới. Ba lựa chọn: <strong><em>căn hộ chung cư cao cấp ở trung tâm</em></strong>, <strong><em>nhà phố liền kề ở vùng ven thoáng đãng</em></strong>, và <strong><em>nhà vườn ngoại ô yên tĩnh</em></strong>. Lựa chọn nào phù hợp cho gia đình?", "Your cousin is going to be a freshman at the university. He is thinking about where to live. There are three choices: living in a dormitory, living with his friends, or living with his relatives. Which one is the best choice for him?": "Trường bạn muốn tổ chức chuyến tham quan học tập ngoại khóa cho sinh viên. Ba điểm đến: <strong><em>viện bảo tàng lịch sử quốc gia</em></strong>, <strong><em>khu bảo tồn thiên nhiên và rừng quốc gia</em></strong>, và <strong><em>một nhà máy sản xuất hiện đại</em></strong>. Nơi nào mang lại nhiều kiến thức nhất?", "SITUATION 09: Your cousin is going to be a freshman at the university. He is thinking about where to live. There are three choices: living in a dormitory, living with his friends, or living with his relatives. Which one is the best choice for him?": "Trường bạn muốn tổ chức chuyến tham quan học tập ngoại khóa cho sinh viên. Ba điểm đến: <strong><em>viện bảo tàng lịch sử quốc gia</em></strong>, <strong><em>khu bảo tồn thiên nhiên và rừng quốc gia</em></strong>, và <strong><em>một nhà máy sản xuất hiện đại</em></strong>. Nơi nào mang lại nhiều kiến thức nhất?", "A student from Đà Nẵng plans to visit Hà Nội this weekend. Three places are suggested for sightseeing: Hồ Chí Minh Mausoleum, Hoàn Kiếm Lake, or Hà Nội Museum. Which place would you recommend?": "Bạn muốn chọn một nơi tập thể dục hằng ngày để rèn luyện sức khỏe. Ba phương án: <strong><em>phòng tập gym gần nhà</em></strong>, <strong><em>công viên công cộng nhiều cây xanh</em></strong>, và <strong><em>tự tập tại nhà qua video hướng dẫn</em></strong>. Nơi nào hiệu quả và duy trì lâu dài nhất?", "SITUATION 10: A student from Đà Nẵng plans to visit Hà Nội this weekend. Three places are suggested for sightseeing: Hồ Chí Minh Mausoleum, Hoàn Kiếm Lake, or Hà Nội Museum. Which place would you recommend?": "Bạn muốn chọn một nơi tập thể dục hằng ngày để rèn luyện sức khỏe. Ba phương án: <strong><em>phòng tập gym gần nhà</em></strong>, <strong><em>công viên công cộng nhiều cây xanh</em></strong>, và <strong><em>tự tập tại nhà qua video hướng dẫn</em></strong>. Nơi nào hiệu quả và duy trì lâu dài nhất?", "Your company is planning a two-day conference for employees. There are three suggested places: at a hotel, at a conference centre, at your company. Which option do you think is the best choice?": "Bạn và bạn thân muốn đi nghỉ ngơi cuối tuần sau một tuần làm việc mệt mỏi. Ba địa điểm: <strong><em>khu cắm trại ven hồ</em></strong>, <strong><em>khu nghỉ dưỡng tắm khoáng nóng Onsen</em></strong>, và <strong><em>một homestay ấm cúng trên đồi</em></strong>. Nơi nào giúp phục hồi năng lượng tốt nhất?", "SITUATION 11: Your company is planning a two-day conference for employees. There are three suggested places: at a hotel, at a conference centre, at your company. Which option do you think is the best choice?": "Bạn và bạn thân muốn đi nghỉ ngơi cuối tuần sau một tuần làm việc mệt mỏi. Ba địa điểm: <strong><em>khu cắm trại ven hồ</em></strong>, <strong><em>khu nghỉ dưỡng tắm khoáng nóng Onsen</em></strong>, và <strong><em>một homestay ấm cúng trên đồi</em></strong>. Nơi nào giúp phục hồi năng lượng tốt nhất?", "You and your friend are choosing a place to eat out together this weekend. There are three options: a Thai restaurant, a Japanese restaurant, and a Chinese restaurant. Which one would you choose?": "Bạn muốn tổ chức một buổi triển lãm tranh nhỏ của nhóm sinh viên nghệ thuật. Ba địa điểm: <strong><em>sảnh lớn của trường</em></strong>, <strong><em>quán cà phê sách phong cách vintage</em></strong>, và <strong><em>phòng trưng bày nghệ thuật công cộng</em></strong>. Bạn sẽ chọn nơi nào?", "SITUATION 12: You and your friend are choosing a place to eat out together this weekend. There are three options: a Thai restaurant, a Japanese restaurant, and a Chinese restaurant. Which one would you choose?": "Bạn muốn tổ chức một buổi triển lãm tranh nhỏ của nhóm sinh viên nghệ thuật. Ba địa điểm: <strong><em>sảnh lớn của trường</em></strong>, <strong><em>quán cà phê sách phong cách vintage</em></strong>, và <strong><em>phòng trưng bày nghệ thuật công cộng</em></strong>. Bạn sẽ chọn nơi nào?", "You and your colleagues want to relax after a long working day. There are three options: going to a quiet café, going to a shopping mall, or going to a public park. Which place would you choose?": "Gia đình bạn muốn chọn một nhà hàng để ăn mừng kỷ niệm ngày cưới của bố mẹ. Ba phương án: <strong><em>nhà hàng ẩm thực truyền thống Việt Nam</em></strong>, <strong><em>nhà hàng món Âu lãng mạn</em></strong>, và <strong><em>nhà hàng buffet hải sản cao cấp</em></strong>. Đâu là lựa chọn hoàn hảo nhất?", "SITUATION 13: You and your colleagues want to relax after a long working day. There are three options: going to a quiet café, going to a shopping mall, or going to a public park. Which place would you choose?": "Gia đình bạn muốn chọn một nhà hàng để ăn mừng kỷ niệm ngày cưới của bố mẹ. Ba phương án: <strong><em>nhà hàng ẩm thực truyền thống Việt Nam</em></strong>, <strong><em>nhà hàng món Âu lãng mạn</em></strong>, và <strong><em>nhà hàng buffet hải sản cao cấp</em></strong>. Đâu là lựa chọn hoàn hảo nhất?", "Your friend is planning to study abroad and is choosing between three countries. The options are: Singapore, Australia, and Japan. Which one would you recommend?": "Bạn của bạn muốn dành một năm 'gap year' tình nguyện dạy học. Ba địa phương được gợi ý: <strong><em>vùng núi cao phía Bắc</em></strong>, <strong><em>một làng chài ven biển miền Trung</em></strong>, và <strong><em>vùng đồng bằng sông Cửu Long</em></strong>. Bạn sẽ khuyên đến đâu?", "SITUATION 14: Your friend is planning to study abroad and is choosing between three countries. The options are: Singapore, Australia, and Japan. Which one would you recommend?": "Bạn của bạn muốn dành một năm 'gap year' tình nguyện dạy học. Ba địa phương được gợi ý: <strong><em>vùng núi cao phía Bắc</em></strong>, <strong><em>một làng chài ven biển miền Trung</em></strong>, và <strong><em>vùng đồng bằng sông Cửu Long</em></strong>. Bạn sẽ khuyên đến đâu?", "Your workplace is about 10 km from your house. You are considering which means of transport to choose: car, bus, and motorbike. Which one would you choose?": "Bạn và hai người bạn dự định đi du lịch từ Hà Nội đến Đà Nẵng vào kỳ nghỉ hè. Các phương tiện được gợi ý là: <strong><em>máy bay</em></strong>, <strong><em>tàu hỏa</em></strong>, và <strong><em>xe khách đường dài</em></strong>. Phương tiện nào là tốt nhất?", "SITUATION 01: Your workplace is about 10 km from your house. You are considering which means of transport to choose: car, bus, and motorbike. Which one would you choose?": "Bạn và hai người bạn dự định đi du lịch từ Hà Nội đến Đà Nẵng vào kỳ nghỉ hè. Các phương tiện được gợi ý là: <strong><em>máy bay</em></strong>, <strong><em>tàu hỏa</em></strong>, và <strong><em>xe khách đường dài</em></strong>. Phương tiện nào là tốt nhất?", "A group of students is going to travel from Ho Chi Minh City to Hue. Three means of transport are suggested: by train, by plane, or by coach. Which one will you suggest?": "Bạn của bạn vừa chuyển đến nhà mới cách chỗ làm 10 km. Anh ấy đang phân vân chọn phương tiện đi làm hằng ngày: <strong><em>xe máy</em></strong>, <strong><em>xe buýt công cộng</em></strong>, hoặc <strong><em>xe đạp</em></strong>. Bạn sẽ khuyên anh ấy chọn phương tiện nào?", "SITUATION 02: A group of students is going to travel from Ho Chi Minh City to Hue. Three means of transport are suggested: by train, by plane, or by coach. Which one will you suggest?": "Bạn của bạn vừa chuyển đến nhà mới cách chỗ làm 10 km. Anh ấy đang phân vân chọn phương tiện đi làm hằng ngày: <strong><em>xe máy</em></strong>, <strong><em>xe buýt công cộng</em></strong>, hoặc <strong><em>xe đạp</em></strong>. Bạn sẽ khuyên anh ấy chọn phương tiện nào?", "Your friend is planning a weekend trip to a nearby beach, about 150 km away. They are considering going by motorbike, by car, or by bus. Which one do you think is the best option?": "Gia đình bạn (4 người) lên kế hoạch đi du lịch cuối tuần cách thành phố 150 km. Ba phương án di chuyển: <strong><em>lái ô tô riêng của gia đình</em></strong>, <strong><em>thuộc xe du lịch có tài xế</em></strong>, và <strong><em>đi tàu hỏa</em></strong>. Lựa chọn nào thuận tiện và thoải mái nhất?", "SITUATION 03: Your friend is planning a weekend trip to a nearby beach, about 150 km away. They are considering going by motorbike, by car, or by bus. Which one do you think is the best option?": "Gia đình bạn (4 người) lên kế hoạch đi du lịch cuối tuần cách thành phố 150 km. Ba phương án di chuyển: <strong><em>lái ô tô riêng của gia đình</em></strong>, <strong><em>thuộc xe du lịch có tài xế</em></strong>, và <strong><em>đi tàu hỏa</em></strong>. Lựa chọn nào thuận tiện và thoải mái nhất?", "You and your classmates will attend a 3-day camping trip in a remote area. You need to choose among riding bicycles, hiring a coach, or using motorbikes. Which option would you recommend?": "Bạn của bạn muốn giảm chi phí đi lại và bảo vệ môi trường khi đi học đại học. Ba phương án: <strong><em>sử dụng xe đạp điện</em></strong>, <strong><em>đi xe buýt công cộng</em></strong>, và <strong><em>đi chung xe máy với bạn cùng phòng</em></strong>. Phương án nào tối ưu nhất?", "SITUATION 04: You and your classmates will attend a 3-day camping trip in a remote area. You need to choose among riding bicycles, hiring a coach, or using motorbikes. Which option would you recommend?": "Bạn của bạn muốn giảm chi phí đi lại và bảo vệ môi trường khi đi học đại học. Ba phương án: <strong><em>sử dụng xe đạp điện</em></strong>, <strong><em>đi xe buýt công cộng</em></strong>, và <strong><em>đi chung xe máy với bạn cùng phòng</em></strong>. Phương án nào tối ưu nhất?", "A tourist wants to explore the city center of Hanoi. The three suggested modes of transport are walking, renting a bicycle, or taking a taxi. Which do you think is the most suitable?": "Bạn đang lên kế hoạch cho chuyến đi phượt khám phá cung đường đèo ven biển cùng nhóm bạn trẻ. Ba phương tiện: <strong><em>xe máy số cá nhân</em></strong>, <strong><em>thuê xe ô tô tự lái</em></strong>, và <strong><em>đi xe đạp địa hình</em></strong>. Bạn sẽ chọn phương tiện nào cho chuyến trải nghiệm?", "SITUATION 05: A tourist wants to explore the city center of Hanoi. The three suggested modes of transport are walking, renting a bicycle, or taking a taxi. Which do you think is the most suitable?": "Bạn đang lên kế hoạch cho chuyến đi phượt khám phá cung đường đèo ven biển cùng nhóm bạn trẻ. Ba phương tiện: <strong><em>xe máy số cá nhân</em></strong>, <strong><em>thuê xe ô tô tự lái</em></strong>, và <strong><em>đi xe đạp địa hình</em></strong>. Bạn sẽ chọn phương tiện nào cho chuyến trải nghiệm?", "Our company is organizing a team-building event in a city 400 km away. You need to decide between traveling by plane, by overnight train, or by company car. Which one would you choose and why?": "Một du khách quốc tế hỏi bạn phương tiện tốt nhất để khám phá nội thành thành phố của bạn trong 2 ngày. Ba phương án: <strong><em>xe buýt 2 tầng ngắm cảnh (Hop-on Hop-off)</em></strong>, <strong><em>thuê xe máy tự lái</em></strong>, và <strong><em>sử dụng taxi / xe công nghệ (Grab)</em></strong>. Bạn sẽ gợi ý phương án nào?", "SITUATION 06: Our company is organizing a team-building event in a city 400 km away. You need to decide between traveling by plane, by overnight train, or by company car. Which one would you choose and why?": "Một du khách quốc tế hỏi bạn phương tiện tốt nhất để khám phá nội thành thành phố của bạn trong 2 ngày. Ba phương án: <strong><em>xe buýt 2 tầng ngắm cảnh (Hop-on Hop-off)</em></strong>, <strong><em>thuê xe máy tự lái</em></strong>, và <strong><em>sử dụng taxi / xe công nghệ (Grab)</em></strong>. Bạn sẽ gợi ý phương án nào?", "Your 15-year-old younger brother wants to improve his English communication skills. There are three ways to choose: studying at an English center, talking with foreigners to practice speaking, and joining an English-speaking club. Which one is the best choice?": "Một người bạn của bạn muốn cải thiện kỹ năng giao tiếp tiếng Anh nhưng thường cảm thấy nhút nhát và sợ mắc lỗi. Ba giải pháp được đưa ra: <strong><em>tham gia câu lạc bộ tiếng Anh vào cuối tuần</em></strong>, <strong><em>luyện nói với người nước ngoài qua ứng dụng online</em></strong>, và <strong><em>tự luyện nói trước gương mỗi ngày</em></strong>. Giải pháp nào hiệu quả nhất?", "SITUATION 01: Your 15-year-old younger brother wants to improve his English communication skills. There are three ways to choose: studying at an English center, talking with foreigners to practice speaking, and joining an English-speaking club. Which one is the best choice?": "Một người bạn của bạn muốn cải thiện kỹ năng giao tiếp tiếng Anh nhưng thường cảm thấy nhút nhát và sợ mắc lỗi. Ba giải pháp được đưa ra: <strong><em>tham gia câu lạc bộ tiếng Anh vào cuối tuần</em></strong>, <strong><em>luyện nói với người nước ngoài qua ứng dụng online</em></strong>, và <strong><em>tự luyện nói trước gương mỗi ngày</em></strong>. Giải pháp nào hiệu quả nhất?", "Your friend spends too much time on social media and wants to stop. She is thinking of: deleting the apps, limiting screen time, or doing more outdoor activities. Which one would you suggest?": "Bạn của bạn gặp khó khăn trong việc quản lý thời gian và thường xuyên nộp bài tập muộn. Ba phương án: <strong><em>sử dụng sổ kế hoạch Planner hàng ngày</em></strong>, <strong><em>dùng ứng dụng nhắc việc trên điện thoại</em></strong>, và <strong><em>nhờ bạn cùng phòng nhắc nhở</em></strong>. Giải pháp nào tốt nhất?", "SITUATION 02: Your friend spends too much time on social media and wants to stop. She is thinking of: deleting the apps, limiting screen time, or doing more outdoor activities. Which one would you suggest?": "Bạn của bạn gặp khó khăn trong việc quản lý thời gian và thường xuyên nộp bài tập muộn. Ba phương án: <strong><em>sử dụng sổ kế hoạch Planner hàng ngày</em></strong>, <strong><em>dùng ứng dụng nhắc việc trên điện thoại</em></strong>, và <strong><em>nhờ bạn cùng phòng nhắc nhở</em></strong>. Giải pháp nào tốt nhất?", "Your younger sister is under pressure because of exams. You are thinking of three solutions: giving her advice, taking her out for a walk, or encouraging her to take a break. Which one would you choose?": "Khu dân cư của bạn muốn giảm thiểu rác thải nhựa để bảo vệ môi trường. Ba giải pháp được đề xuất: <strong><em>thu phí sử dụng túi nilon tại chợ và cửa hàng</em></strong>, <strong><em>tổ chức các buổi đổi rác nhựa lấy cây xanh</em></strong>, và <strong><em>tuyên truyền nâng cao nhận thức người dân</em></strong>. Biện pháp nào thiết thực nhất?", "SITUATION 03: Your younger sister is under pressure because of exams. You are thinking of three solutions: giving her advice, taking her out for a walk, or encouraging her to take a break. Which one would you choose?": "Khu dân cư của bạn muốn giảm thiểu rác thải nhựa để bảo vệ môi trường. Ba giải pháp được đề xuất: <strong><em>thu phí sử dụng túi nilon tại chợ và cửa hàng</em></strong>, <strong><em>tổ chức các buổi đổi rác nhựa lấy cây xanh</em></strong>, và <strong><em>tuyên truyền nâng cao nhận thức người dân</em></strong>. Biện pháp nào thiết thực nhất?", "Your friend is very stressed due to too much schoolwork. She is considering three options: doing exercise, talking to a friend, or taking a rest. Which one would you recommend?": "Bạn của bạn cảm thấy rất căng thẳng trước các kỳ thi quan trọng. Ba cách giải tỏa: <strong><em>tập thiền hoặc yoga 15 phút mỗi ngày</em></strong>, <strong><em>chia sẻ tâm sự với gia đình hoặc bạn bè</em></strong>, và <strong><em>nghe nhạc êm dịu trước khi ngủ</em></strong>. Lựa chọn nào giúp bình tĩnh tốt nhất?", "SITUATION 04: Your friend is very stressed due to too much schoolwork. She is considering three options: doing exercise, talking to a friend, or taking a rest. Which one would you recommend?": "Bạn của bạn cảm thấy rất căng thẳng trước các kỳ thi quan trọng. Ba cách giải tỏa: <strong><em>tập thiền hoặc yoga 15 phút mỗi ngày</em></strong>, <strong><em>chia sẻ tâm sự với gia đình hoặc bạn bè</em></strong>, và <strong><em>nghe nhạc êm dịu trước khi ngủ</em></strong>. Lựa chọn nào giúp bình tĩnh tốt nhất?", "Your cousin is bullied at school. There are three solutions: talk to teachers, talk to his parents, and talk to his friends. Which one is the best choice?": "Trường học của bạn muốn khuyến khích sinh viên đọc nhiều sách hơn. Ba biện pháp: <strong><em>nâng cấp không gian thư viện hiện đại và tiện nghi</em></strong>, <strong><em>tổ chức ngày hội sách và giảm giá sách</em></strong>, và <strong><em>cộng điểm rèn luyện cho sinh viên mượn sách</em></strong>. Giải pháp nào hấp dẫn sinh viên nhất?", "SITUATION 05: Your cousin is bullied at school. There are three solutions: talk to teachers, talk to his parents, and talk to his friends. Which one is the best choice?": "Trường học của bạn muốn khuyến khích sinh viên đọc nhiều sách hơn. Ba biện pháp: <strong><em>nâng cấp không gian thư viện hiện đại và tiện nghi</em></strong>, <strong><em>tổ chức ngày hội sách và giảm giá sách</em></strong>, và <strong><em>cộng điểm rèn luyện cho sinh viên mượn sách</em></strong>. Giải pháp nào hấp dẫn sinh viên nhất?", "Your brother is in love with a girl in his high school. What will you do: ask him to stop, let him continue under your control, and talk to parents?": "Bạn của bạn muốn tiết kiệm tiền để chuẩn bị cho các kế hoạch tương lai nhưng hay tiêu xài ngoài dự kiến. Ba cách: <strong><em>ghi chép chi tiêu chi tiết hàng ngày bằng app</em></strong>, <strong><em>gửi tiết kiệm tự động ngay khi nhận lương/tiền tiêu vặt</em></strong>, và <strong><em>chỉ mang theo một lượng tiền mặt cố định khi ra ngoài</em></strong>. Cách nào hiệu quả nhất?", "SITUATION 06: Your brother is in love with a girl in his high school. What will you do: ask him to stop, let him continue under your control, and talk to parents?": "Bạn của bạn muốn tiết kiệm tiền để chuẩn bị cho các kế hoạch tương lai nhưng hay tiêu xài ngoài dự kiến. Ba cách: <strong><em>ghi chép chi tiêu chi tiết hàng ngày bằng app</em></strong>, <strong><em>gửi tiết kiệm tự động ngay khi nhận lương/tiền tiêu vặt</em></strong>, và <strong><em>chỉ mang theo một lượng tiền mặt cố định khi ra ngoài</em></strong>. Cách nào hiệu quả nhất?", "Your sister has told lies about many things, and she continues doing this without changing. You are thinking about what to do: talk to her, talk to parents, or let her continue?": "Một người bạn muốn từ bỏ thói quen thức khuya lướt điện thoại để ngủ sớm hơn. Ba giải pháp: <strong><em>để điện thoại ở xa giường ngủ 1 tiếng trước khi ngủ</em></strong>, <strong><em>đọc một cuốn sách giấy</em></strong>, và <strong><em>tắm nước ấm trước khi đi ngủ</em></strong>. Giải pháp nào dễ thực hiện nhất?", "SITUATION 07: Your sister has told lies about many things, and she continues doing this without changing. You are thinking about what to do: talk to her, talk to parents, or let her continue?": "Một người bạn muốn từ bỏ thói quen thức khuya lướt điện thoại để ngủ sớm hơn. Ba giải pháp: <strong><em>để điện thoại ở xa giường ngủ 1 tiếng trước khi ngủ</em></strong>, <strong><em>đọc một cuốn sách giấy</em></strong>, và <strong><em>tắm nước ấm trước khi đi ngủ</em></strong>. Giải pháp nào dễ thực hiện nhất?", "You have a headache. You are thinking about what to do. Three options are: doing yoga, taking medicine, or visiting the doctor. Which is the best choice?": "Bạn của bạn muốn giảm cân và có vóc dáng khỏe mạnh hơn nhưng không có nhiều thời gian. Ba phương án: <strong><em>cắt giảm đường và đồ ăn nhanh</em></strong>, <strong><em>tập bài tập ngắn cường độ cao HIIT 15 phút tại nhà</em></strong>, và <strong><em>đi bộ ít nhất 10.000 bước mỗi ngày</em></strong>. Phương án nào bền vững nhất?", "SITUATION 08: You have a headache. You are thinking about what to do. Three options are: doing yoga, taking medicine, or visiting the doctor. Which is the best choice?": "Bạn của bạn muốn giảm cân và có vóc dáng khỏe mạnh hơn nhưng không có nhiều thời gian. Ba phương án: <strong><em>cắt giảm đường và đồ ăn nhanh</em></strong>, <strong><em>tập bài tập ngắn cường độ cao HIIT 15 phút tại nhà</em></strong>, và <strong><em>đi bộ ít nhất 10.000 bước mỗi ngày</em></strong>. Phương án nào bền vững nhất?", "You are the director of your local hospital. You wish to improve the overall quality of the hospital. Three options are considered: investing in medical equipment to enhance treatment quality, collecting feedback from patients to improve services, and expanding hospital facilities to reduce overcrowding. What would you do to achieve that goal?": "Một nhóm học tập của bạn thường xảy ra bất đồng quan điểm khi làm bài tập lớn. Ba cách giải quyết: <strong><em>bầu một trưởng nhóm có tiếng nói quyết định cuối cùng</em></strong>, <strong><em>tổ chức họp trực tiếp để bỏ phiếu dân chủ</em></strong>, và <strong><em>nhờ giảng viên hướng dẫn phân xử</em></strong>. Bạn chọn cách nào?", "SITUATION 09: You are the director of your local hospital. You wish to improve the overall quality of the hospital. Three options are considered: investing in medical equipment to enhance treatment quality, collecting feedback from patients to improve services, and expanding hospital facilities to reduce overcrowding. What would you do to achieve that goal?": "Một nhóm học tập của bạn thường xảy ra bất đồng quan điểm khi làm bài tập lớn. Ba cách giải quyết: <strong><em>bầu một trưởng nhóm có tiếng nói quyết định cuối cùng</em></strong>, <strong><em>tổ chức họp trực tiếp để bỏ phiếu dân chủ</em></strong>, và <strong><em>nhờ giảng viên hướng dẫn phân xử</em></strong>. Bạn chọn cách nào?", "Your uncle, who is 45 years old, would like to stay healthy. There are three options to choose: become a vegetarian, work out at the gym, or do exercise. Which one do you think is the best choice?": "Bạn muốn duy trì sự tập trung khi học tập và làm việc tại nhà mà không bị xao nhãng. Ba giải pháp: <strong><em>áp dụng phương pháp Pomodoro (học 25 phút, nghỉ 5 phút)</em></strong>, <strong><em>tắt hết thông báo mạng xã hội trên thiết bị</em></strong>, và <strong><em>tạo một góc làm việc riêng biệt, ngăn nắp</em></strong>. Phương pháp nào mang lại hiệu quả cao nhất?", "SITUATION 10: Your uncle, who is 45 years old, would like to stay healthy. There are three options to choose: become a vegetarian, work out at the gym, or do exercise. Which one do you think is the best choice?": "Bạn muốn duy trì sự tập trung khi học tập và làm việc tại nhà mà không bị xao nhãng. Ba giải pháp: <strong><em>áp dụng phương pháp Pomodoro (học 25 phút, nghỉ 5 phút)</em></strong>, <strong><em>tắt hết thông báo mạng xã hội trên thiết bị</em></strong>, và <strong><em>tạo một góc làm việc riêng biệt, ngăn nắp</em></strong>. Phương pháp nào mang lại hiệu quả cao nhất?", "Your sister wants to lose weight. There are three options to choose: going to the gym, going on a diet, and taking weight-loss medicine. Which one would you recommend her?": "Thành phố bạn muốn giải quyết tình trạng ùn tắc giao thông vào giờ cao điểm. Ba giải pháp: <strong><em>khuyến khích người dân đi phương tiện công cộng bằng cách giảm giá vé</em></strong>, <strong><em>lệch ca giờ học và giờ làm của các cơ quan</em></strong>, và <strong><em>mở rộng đường xá và xây thêm cầu vượt</em></strong>. Giải pháp nào có tính khả thi cao nhất?", "SITUATION 11: Your sister wants to lose weight. There are three options to choose: going to the gym, going on a diet, and taking weight-loss medicine. Which one would you recommend her?": "Thành phố bạn muốn giải quyết tình trạng ùn tắc giao thông vào giờ cao điểm. Ba giải pháp: <strong><em>khuyến khích người dân đi phương tiện công cộng bằng cách giảm giá vé</em></strong>, <strong><em>lệch ca giờ học và giờ làm của các cơ quan</em></strong>, và <strong><em>mở rộng đường xá và xây thêm cầu vượt</em></strong>. Giải pháp nào có tính khả thi cao nhất?", "Your school is trying to reduce the amount of plastic waste. Three solutions are suggested: encouraging students to bring reusable bottles, organizing a “no plastic day” every week, or putting up educational posters around the campus. Which one do you think is the most effective solution?": "Bạn của bạn muốn cải thiện kỹ năng thuyết trình trước đám đông. Ba phương án: <strong><em>tham gia khóa học kỹ năng mềm chuyên sâu</em></strong>, <strong><em>quay video bản thân tập nói và tự xem lại để sửa</em></strong>, và <strong><em>chủ động nhận phát biểu trong các buổi học</em></strong>. Cách nào rèn luyện phản xạ tốt nhất?", "SITUATION 12: Your school is trying to reduce the amount of plastic waste. Three solutions are suggested: encouraging students to bring reusable bottles, organizing a “no plastic day” every week, or putting up educational posters around the campus. Which one do you think is the most effective solution?": "Bạn của bạn muốn cải thiện kỹ năng thuyết trình trước đám đông. Ba phương án: <strong><em>tham gia khóa học kỹ năng mềm chuyên sâu</em></strong>, <strong><em>quay video bản thân tập nói và tự xem lại để sửa</em></strong>, và <strong><em>chủ động nhận phát biểu trong các buổi học</em></strong>. Cách nào rèn luyện phản xạ tốt nhất?", "Your friend is not good at foreign languages and wants to improve his English. Three options are: taking an English course, talking with friends at home, or joining an English-speaking club. Which one would you recommend?": "Bạn muốn mở rộng vốn từ vựng tiếng Anh học thuật một cách nhớ lâu. Ba phương pháp: <strong><em>học qua Flashcards lặp lại ngắt quãng (Spaced Repetition)</em></strong>, <strong><em>đọc báo tiếng Anh hàng ngày (như BBC, CNN)</em></strong>, và <strong><em>viết nhật ký ngắn bằng tiếng Anh sử dụng từ mới</em></strong>. Bạn khuyên dùng phương pháp nào?", "SITUATION 13: Your friend is not good at foreign languages and wants to improve his English. Three options are: taking an English course, talking with friends at home, or joining an English-speaking club. Which one would you recommend?": "Bạn muốn mở rộng vốn từ vựng tiếng Anh học thuật một cách nhớ lâu. Ba phương pháp: <strong><em>học qua Flashcards lặp lại ngắt quãng (Spaced Repetition)</em></strong>, <strong><em>đọc báo tiếng Anh hàng ngày (như BBC, CNN)</em></strong>, và <strong><em>viết nhật ký ngắn bằng tiếng Anh sử dụng từ mới</em></strong>. Bạn khuyên dùng phương pháp nào?", "A group of your foreign students wants to learn Vietnamese history. Three activities are considered: visiting a museum, watching documentaries, and reading history books. Which one do you think is the best choice?": "Bạn của bạn cảm thấy chán nản và mất động lực trong công việc hiện tại. Ba lời khuyên: <strong><em>dành vài ngày nghỉ phép để đi du lịch nạp lại năng lượng</em></strong>, <strong><em>thảo luận với cấp trên để nhận thử thách hoặc dự án mới</em></strong>, và <strong><em>bắt đầu tìm kiếm cơ hội công việc mới</em></strong>. Bạn sẽ khuyên điều gì?", "SITUATION 14: A group of your foreign students wants to learn Vietnamese history. Three activities are considered: visiting a museum, watching documentaries, and reading history books. Which one do you think is the best choice?": "Bạn của bạn cảm thấy chán nản và mất động lực trong công việc hiện tại. Ba lời khuyên: <strong><em>dành vài ngày nghỉ phép để đi du lịch nạp lại năng lượng</em></strong>, <strong><em>thảo luận với cấp trên để nhận thử thách hoặc dự án mới</em></strong>, và <strong><em>bắt đầu tìm kiếm cơ hội công việc mới</em></strong>. Bạn sẽ khuyên điều gì?", "Your friend is looking for a new job. He is considering three options: a graphic designer, an IT support specialist, or a content creator for social media. Which job would you recommend he choose?": "Sau khi tốt nghiệp đại học chuyên ngành ngôn ngữ Anh, bạn của bạn đang phân vân chọn công việc đầu tiên: <strong><em>làm giáo viên tiếng Anh tại trung tâm</em></strong>, <strong><em>làm nhân viên biên phiên dịch cho doanh nghiệp</em></strong>, hoặc <strong><em>làm chuyên viên truyền thông quốc tế</em></strong>. Bạn sẽ khuyên bạn ấy chọn nghề nào?", "SITUATION 01: Your friend is looking for a new job. He is considering three options: a graphic designer, an IT support specialist, or a content creator for social media. Which job would you recommend he choose?": "Sau khi tốt nghiệp đại học chuyên ngành ngôn ngữ Anh, bạn của bạn đang phân vân chọn công việc đầu tiên: <strong><em>làm giáo viên tiếng Anh tại trung tâm</em></strong>, <strong><em>làm nhân viên biên phiên dịch cho doanh nghiệp</em></strong>, hoặc <strong><em>làm chuyên viên truyền thông quốc tế</em></strong>. Bạn sẽ khuyên bạn ấy chọn nghề nào?", "Your brother is going to graduate from university. He is thinking about finding a job. There are three choices: a teacher, a translator, and a tour guide. Which one would you recommend?": "Một sinh viên năm hai muốn tìm việc làm thêm vào kỳ nghỉ hè để tích lũy kinh nghiệm. Ba công việc: <strong><em>nhân viên phục vụ quán cà phê</em></strong>, <strong><em>gia sư dạy kèm học sinh</em></strong>, và <strong><em>thực tập sinh bán thời gian tại văn phòng</em></strong>. Công việc nào có ích nhất?", "SITUATION 02: Your brother is going to graduate from university. He is thinking about finding a job. There are three choices: a teacher, a translator, and a tour guide. Which one would you recommend?": "Một sinh viên năm hai muốn tìm việc làm thêm vào kỳ nghỉ hè để tích lũy kinh nghiệm. Ba công việc: <strong><em>nhân viên phục vụ quán cà phê</em></strong>, <strong><em>gia sư dạy kèm học sinh</em></strong>, và <strong><em>thực tập sinh bán thời gian tại văn phòng</em></strong>. Công việc nào có ích nhất?", "Your friend wants to find a part-time job to improve his English. He is considering three options: a job at a restaurant, a job at an English center, and a job at a travel agency. Which one do you think is the best choice?": "Bạn của bạn vừa nhận được 3 lời mời làm việc với 3 tiêu chí khác nhau: <strong><em>công việc lương cao nhưng áp lực lớn và tăng ca nhiều</em></strong>, <strong><em>công việc lương trung bình nhưng môi trường thân thiện và có thời gian cho bản thân</em></strong>, và <strong><em>công việc tại công ty khởi nghiệp (startup) nhiều cơ hội học hỏi nhưng chưa ổn định</em></strong>. Bạn khuyên chọn gì?", "SITUATION 03: Your friend wants to find a part-time job to improve his English. He is considering three options: a job at a restaurant, a job at an English center, and a job at a travel agency. Which one do you think is the best choice?": "Bạn của bạn vừa nhận được 3 lời mời làm việc với 3 tiêu chí khác nhau: <strong><em>công việc lương cao nhưng áp lực lớn và tăng ca nhiều</em></strong>, <strong><em>công việc lương trung bình nhưng môi trường thân thiện và có thời gian cho bản thân</em></strong>, và <strong><em>công việc tại công ty khởi nghiệp (startup) nhiều cơ hội học hỏi nhưng chưa ổn định</em></strong>. Bạn khuyên chọn gì?", "Your friend has just graduated and is looking for a teaching job. There are three options: teaching in a rural school, teaching in a big city school, or teaching in an international school. Which one is most suitable for him?": "Bạn đang cân nhắc giữa 3 hình thức làm việc trong tương lai: <strong><em>làm việc cố định tại văn phòng công ty (Onsite)</em></strong>, <strong><em>làm việc hoàn toàn từ xa tại nhà (Remote)</em></strong>, và <strong><em>làm việc kết hợp linh hoạt giữa nhà và văn phòng (Hybrid)</em></strong>. Bạn thích hình thức nào nhất?", "SITUATION 04: Your friend has just graduated and is looking for a teaching job. There are three options: teaching in a rural school, teaching in a big city school, or teaching in an international school. Which one is most suitable for him?": "Bạn đang cân nhắc giữa 3 hình thức làm việc trong tương lai: <strong><em>làm việc cố định tại văn phòng công ty (Onsite)</em></strong>, <strong><em>làm việc hoàn toàn từ xa tại nhà (Remote)</em></strong>, và <strong><em>làm việc kết hợp linh hoạt giữa nhà và văn phòng (Hybrid)</em></strong>. Bạn thích hình thức nào nhất?", "Your cousin is passionate about art and creativity. She is thinking of pursuing a career. Three options are considered: a graphic designer, an interior decorator, and a fashion designer. Which one would you recommend?": "Em trai của bạn có năng khiếu công nghệ và sắp chọn ngành học đại học. Ba ngành được cân nhắc: <strong><em>kỹ sư phần mềm (Software Engineering)</em></strong>, <strong><em>chuyên gia trí tuệ nhân tạo (AI Specialist)</em></strong>, và <strong><em>chuyên gia an ninh mạng (Cybersecurity)</em></strong>. Bạn sẽ tư vấn ngành nào?", "SITUATION 05: Your cousin is passionate about art and creativity. She is thinking of pursuing a career. Three options are considered: a graphic designer, an interior decorator, and a fashion designer. Which one would you recommend?": "Em trai của bạn có năng khiếu công nghệ và sắp chọn ngành học đại học. Ba ngành được cân nhắc: <strong><em>kỹ sư phần mềm (Software Engineering)</em></strong>, <strong><em>chuyên gia trí tuệ nhân tạo (AI Specialist)</em></strong>, và <strong><em>chuyên gia an ninh mạng (Cybersecurity)</em></strong>. Bạn sẽ tư vấn ngành nào?", "Your close friend wants to choose a job that offers a good work-life balance. He is considering working in an office, becoming a freelancer, or running a small business. Which option do you think is the most suitable?": "Bạn của bạn muốn khởi nghiệp tự kinh doanh nhỏ và đang chọn lĩnh vực: <strong><em>mở tiệm bánh ngọt và cà phê</em></strong>, <strong><em>bán quần áo thời trang thiết kế online</em></strong>, và <strong><em>kinh doanh cây cảnh mini phong thủy</em></strong>. Ý tưởng nào tiềm năng nhất?", "SITUATION 06: Your close friend wants to choose a job that offers a good work-life balance. He is considering working in an office, becoming a freelancer, or running a small business. Which option do you think is the most suitable?": "Bạn của bạn muốn khởi nghiệp tự kinh doanh nhỏ và đang chọn lĩnh vực: <strong><em>mở tiệm bánh ngọt và cà phê</em></strong>, <strong><em>bán quần áo thời trang thiết kế online</em></strong>, và <strong><em>kinh doanh cây cảnh mini phong thủy</em></strong>. Ý tưởng nào tiềm năng nhất?", "Your younger sister wants a stable and well-paid job after graduation. She is considering three options: working for the government, working for a foreign company, or starting her own business. Which one would you suggest?": "Bạn muốn trau dồi một kỹ năng phụ để gia tăng cơ hội nghề nghiệp trong kỷ nguyên số. Ba kỹ năng: <strong><em>kỹ năng thiết kế đồ họa (Graphic Design)</em></strong>, <strong><em>kỹ năng phân tích dữ liệu cơ bản (Data Analysis)</em></strong>, và <strong><em>kỹ năng quản trị mạng xã hội & sáng tạo nội dung (Content Creator)</em></strong>. Bạn sẽ học kỹ năng nào?", "SITUATION 07: Your younger sister wants a stable and well-paid job after graduation. She is considering three options: working for the government, working for a foreign company, or starting her own business. Which one would you suggest?": "Bạn muốn trau dồi một kỹ năng phụ để gia tăng cơ hội nghề nghiệp trong kỷ nguyên số. Ba kỹ năng: <strong><em>kỹ năng thiết kế đồ họa (Graphic Design)</em></strong>, <strong><em>kỹ năng phân tích dữ liệu cơ bản (Data Analysis)</em></strong>, và <strong><em>kỹ năng quản trị mạng xã hội & sáng tạo nội dung (Content Creator)</em></strong>. Bạn sẽ học kỹ năng nào?", "Teachers at a high school are considering how to assess students. Three choices are suggested: teacher assessment, self-assessment, and peer assessment. Which one is the best choice?": "Trường đại học của bạn muốn chọn hình thức đánh giá kết quả học tập môn học cuối kỳ. Ba hình thức: <strong><em>thi viết tự luận trên giấy</em></strong>, <strong><em>thuyết trình dự án theo nhóm</em></strong>, và <strong><em>làm bài tập lớn thu hoạch cá nhân</em></strong>. Bạn ủng hộ hình thức đánh giá nào?", "SITUATION 01: Teachers at a high school are considering how to assess students. Three choices are suggested: teacher assessment, self-assessment, and peer assessment. Which one is the best choice?": "Trường đại học của bạn muốn chọn hình thức đánh giá kết quả học tập môn học cuối kỳ. Ba hình thức: <strong><em>thi viết tự luận trên giấy</em></strong>, <strong><em>thuyết trình dự án theo nhóm</em></strong>, và <strong><em>làm bài tập lớn thu hoạch cá nhân</em></strong>. Bạn ủng hộ hình thức đánh giá nào?", "Teachers at your child's primary school are asking you about how to assess students. Three options are suggested: marks only, comments only, both marks and comments.": "Một câu lạc bộ tình nguyện muốn quảng bá sự kiện gây quỹ từ thiện đến đông đảo bạn trẻ. Ba hình thức: <strong><em>quảng cáo qua mạng xã hội (Facebook, TikTok)</em></strong>, <strong><em>phát tờ rơi và dán áp phích tại các trường</em></strong>, và <strong><em>tổ chức sự kiện biểu diễn ca nhạc nhỏ tại phố đi bộ</em></strong>. Hình thức nào hiệu quả nhất?", "SITUATION 02: Teachers at your child's primary school are asking you about how to assess students. Three options are suggested: marks only, comments only, both marks and comments.": "Một câu lạc bộ tình nguyện muốn quảng bá sự kiện gây quỹ từ thiện đến đông đảo bạn trẻ. Ba hình thức: <strong><em>quảng cáo qua mạng xã hội (Facebook, TikTok)</em></strong>, <strong><em>phát tờ rơi và dán áp phích tại các trường</em></strong>, và <strong><em>tổ chức sự kiện biểu diễn ca nhạc nhỏ tại phố đi bộ</em></strong>. Hình thức nào hiệu quả nhất?", "Your local government wants to promote tourism in your area. There are three methods for advertising: advertising through writing contests, through television and radio, and through social media. Which one is the best choice?": "Một cửa hàng thời trang mới khai trương muốn tri ân khách hàng trong tuần đầu tiên. Ba hình thức khuyến mãi: <strong><em>giảm giá trực tiếp 30% trên hóa đơn</em></strong>, <strong><em>tặng quà kèm theo hóa đơn</em></strong>, và <strong><em>tặng voucher mua sắm cho lần tiếp theo</em></strong>. Bạn nghĩ hình thức nào thu hút khách nhất?", "SITUATION 03: Your local government wants to promote tourism in your area. There are three methods for advertising: advertising through writing contests, through television and radio, and through social media. Which one is the best choice?": "Một cửa hàng thời trang mới khai trương muốn tri ân khách hàng trong tuần đầu tiên. Ba hình thức khuyến mãi: <strong><em>giảm giá trực tiếp 30% trên hóa đơn</em></strong>, <strong><em>tặng quà kèm theo hóa đơn</em></strong>, và <strong><em>tặng voucher mua sắm cho lần tiếp theo</em></strong>. Bạn nghĩ hình thức nào thu hút khách nhất?", "Your school manager wants to advertise your school, and he is considering about which means of advertisement to advertise the school. Three options are: the Internet, television, and radio. Which option is the best choice?": "Trường bạn muốn tổ chức cuộc thi tìm hiểu lịch sử đất nước cho sinh viên. Ba hình thức: <strong><em>thi trắc nghiệm trực tuyến Rung chuông vàng</em></strong>, <strong><em>thi làm video clip ngắn sáng tạo</em></strong>, và <strong><em>thi triển lãm tranh ảnh lịch sử</em></strong>. Hình thức nào hào hứng nhất?", "SITUATION 04: Your school manager wants to advertise your school, and he is considering about which means of advertisement to advertise the school. Three options are: the Internet, television, and radio. Which option is the best choice?": "Trường bạn muốn tổ chức cuộc thi tìm hiểu lịch sử đất nước cho sinh viên. Ba hình thức: <strong><em>thi trắc nghiệm trực tuyến Rung chuông vàng</em></strong>, <strong><em>thi làm video clip ngắn sáng tạo</em></strong>, và <strong><em>thi triển lãm tranh ảnh lịch sử</em></strong>. Hình thức nào hào hứng nhất?", "You want to organize an activity to raise money for poor people. Which one would you choose: holding a second-hand market, running a marathon, and organizing a concert?": "Một công ty muốn khảo sát mức độ hài lòng của nhân viên về môi trường làm việc. Ba hình thức: <strong><em>bảng khảo sát trực tuyến ẩn danh</em></strong>, <strong><em>buổi gặp mặt đối thoại trực tiếp với ban giám đốc</em></strong>, và <strong><em>hộp thư góp ý đặt tại văn phòng</em></strong>. Cách làm nào mang lại thông tin trung thực nhất?", "SITUATION 05: You want to organize an activity to raise money for poor people. Which one would you choose: holding a second-hand market, running a marathon, and organizing a concert?": "Một công ty muốn khảo sát mức độ hài lòng của nhân viên về môi trường làm việc. Ba hình thức: <strong><em>bảng khảo sát trực tuyến ẩn danh</em></strong>, <strong><em>buổi gặp mặt đối thoại trực tiếp với ban giám đốc</em></strong>, và <strong><em>hộp thư góp ý đặt tại văn phòng</em></strong>. Cách làm nào mang lại thông tin trung thực nhất?", "You are preparing a presentation on a new product. There are three options for you to choose to present the product: a PowerPoint slide, a poster, and a video. Which is the best choice?": "Bạn muốn tổ chức một buổi chia tay tốt nghiệp đáng nhớ cùng nhóm bạn thân. Ba hình thức: <strong><em>tổ chức tiệc dạ hội trang trọng</em></strong>, <strong><em>chuyến du lịch phượt 2 ngày 1 đêm</em></strong>, và <strong><em>buổi cắm trại ngủ lều bên bãi biển</em></strong>. Bạn sẽ chọn hình thức nào?", "SITUATION 06: You are preparing a presentation on a new product. There are three options for you to choose to present the product: a PowerPoint slide, a poster, and a video. Which is the best choice?": "Bạn muốn tổ chức một buổi chia tay tốt nghiệp đáng nhớ cùng nhóm bạn thân. Ba hình thức: <strong><em>tổ chức tiệc dạ hội trang trọng</em></strong>, <strong><em>chuyến du lịch phượt 2 ngày 1 đêm</em></strong>, và <strong><em>buổi cắm trại ngủ lều bên bãi biển</em></strong>. Bạn sẽ chọn hình thức nào?", "Your school is about to conduct a survey to find out students' opinions on issues that have a heavy impact on the community. Three actions are considered: smoking in restaurants, using mobile phones while driving, and making noise in public places. Which one do you think has the heaviest impact on the community?": "Thành phố của bạn muốn chuyển đổi một bãi đất trống ở trung tâm thành công trình phục vụ người dân. Ba phương án: <strong><em>công viên cây xanh công cộng</em></strong>, <strong><em>khu phức hợp trung tâm thương mại</em></strong>, và <strong><em>bãi đỗ xe thông minh nhiều tầng</em></strong>. Bạn ủng hộ phương án nào?", "SITUATION 01: Your school is about to conduct a survey to find out students' opinions on issues that have a heavy impact on the community. Three actions are considered: smoking in restaurants, using mobile phones while driving, and making noise in public places. Which one do you think has the heaviest impact on the community?": "Thành phố của bạn muốn chuyển đổi một bãi đất trống ở trung tâm thành công trình phục vụ người dân. Ba phương án: <strong><em>công viên cây xanh công cộng</em></strong>, <strong><em>khu phức hợp trung tâm thương mại</em></strong>, và <strong><em>bãi đỗ xe thông minh nhiều tầng</em></strong>. Bạn ủng hộ phương án nào?", "You want to buy a house. Which aspect would you consider the most important: size, cost, and location?  Which one is the best choice?": "Một gia đình có con nhỏ đang chọn môi trường giáo dục tiểu học cho con: <strong><em>trường công lập truyền thống</em></strong>, <strong><em>trường tư thục song ngữ chất lượng cao</em></strong>, và <strong><em>trường quốc tế hoàn toàn</em></strong>. Bạn sẽ khuyên chọn loại trường nào?", "SITUATION 02: You want to buy a house. Which aspect would you consider the most important: size, cost, and location?  Which one is the best choice?": "Một gia đình có con nhỏ đang chọn môi trường giáo dục tiểu học cho con: <strong><em>trường công lập truyền thống</em></strong>, <strong><em>trường tư thục song ngữ chất lượng cao</em></strong>, và <strong><em>trường quốc tế hoàn toàn</em></strong>. Bạn sẽ khuyên chọn loại trường nào?", "You are going to graduate from university next month. You are thinking of finding a suitable job for yourself. Three things are considered: salary, location, and job promotion. Which one would you consider when choosing a job?": "Bạn được trao một khoản học bổng tiền mặt và đang cân nhắc cách sử dụng: <strong><em>đăng ký một khóa học kỹ năng chuyên sâu</em></strong>, <strong><em>tiết kiệm vào ngân hàng cho tương lai</em></strong>, và <strong><em>mua một chiếc máy tính xách tay phục vụ việc học</em></strong>. Bạn sẽ làm gì?", "SITUATION 03: You are going to graduate from university next month. You are thinking of finding a suitable job for yourself. Three things are considered: salary, location, and job promotion. Which one would you consider when choosing a job?": "Bạn được trao một khoản học bổng tiền mặt và đang cân nhắc cách sử dụng: <strong><em>đăng ký một khóa học kỹ năng chuyên sâu</em></strong>, <strong><em>tiết kiệm vào ngân hàng cho tương lai</em></strong>, và <strong><em>mua một chiếc máy tính xách tay phục vụ việc học</em></strong>. Bạn sẽ làm gì?", "Your brother is starting university next month, and your family is trying to decide which university would be the best fit for him. Three key factors are considered: the university’s ranking, its distance from home, and the course fees. In your opinion, which factor is the most important?": "Một công ty muốn cải thiện chế độ phúc lợi để giữ chân nhân tài. Ba chính sách: <strong><em>tăng lương thưởng hàng năm</em></strong>, <strong><em>cung cấp gói bảo hiểm sức khỏe cao cấp cho cả gia đình</em></strong>, và <strong><em>cho phép làm việc linh hoạt 4 ngày/tuần</em></strong>. Chính sách nào hấp dẫn nhất?", "SITUATION 04: Your brother is starting university next month, and your family is trying to decide which university would be the best fit for him. Three key factors are considered: the university’s ranking, its distance from home, and the course fees. In your opinion, which factor is the most important?": "Một công ty muốn cải thiện chế độ phúc lợi để giữ chân nhân tài. Ba chính sách: <strong><em>tăng lương thưởng hàng năm</em></strong>, <strong><em>cung cấp gói bảo hiểm sức khỏe cao cấp cho cả gia đình</em></strong>, và <strong><em>cho phép làm việc linh hoạt 4 ngày/tuần</em></strong>. Chính sách nào hấp dẫn nhất?", "As a company manager seeking to recruit new employees, you must evaluate three factors: honesty, communication skills, and professional skills. In your opinion, which factor is the most important?": "Một bạn trẻ vừa tốt nghiệp đang phân vân giữa: <strong><em>ở lại thành phố lớn phát triển sự nghiệp</em></strong>, <strong><em>về quê lập nghiệp gần gia đình</em></strong>, hoặc <strong><em>tìm kiếm cơ hội làm việc tại nước ngoài</em></strong>. Bạn sẽ khuyên hướng đi nào?", "SITUATION 05: As a company manager seeking to recruit new employees, you must evaluate three factors: honesty, communication skills, and professional skills. In your opinion, which factor is the most important?": "Một bạn trẻ vừa tốt nghiệp đang phân vân giữa: <strong><em>ở lại thành phố lớn phát triển sự nghiệp</em></strong>, <strong><em>về quê lập nghiệp gần gia đình</em></strong>, hoặc <strong><em>tìm kiếm cơ hội làm việc tại nước ngoài</em></strong>. Bạn sẽ khuyên hướng đi nào?", "Your co-worker wants to learn to play the guitar. There are three possible options: using a tutorial app, taking part in a private course, or learning from a friend who plays guitar well. Which one do you think is the best choice?": "Trường đại học muốn nâng cao năng lực ngoại ngữ cho toàn bộ sinh viên. Ba giải pháp: <strong><em>bắt buộc chuẩn đầu ra tiếng Anh B1/B2 trước khi tốt nghiệp</em></strong>, <strong><em>giảng dạy một số môn chuyên ngành hoàn toàn bằng tiếng Anh</em></strong>, và <strong><em>miễn học phí cho các câu lạc bộ tiếng Anh</em></strong>. Giải pháp nào toàn diện nhất?", "SITUATION 06: Your co-worker wants to learn to play the guitar. There are three possible options: using a tutorial app, taking part in a private course, or learning from a friend who plays guitar well. Which one do you think is the best choice?": "Trường đại học muốn nâng cao năng lực ngoại ngữ cho toàn bộ sinh viên. Ba giải pháp: <strong><em>bắt buộc chuẩn đầu ra tiếng Anh B1/B2 trước khi tốt nghiệp</em></strong>, <strong><em>giảng dạy một số môn chuyên ngành hoàn toàn bằng tiếng Anh</em></strong>, và <strong><em>miễn học phí cho các câu lạc bộ tiếng Anh</em></strong>. Giải pháp nào toàn diện nhất?", "Your school is organizing a presentation about your country. You can choose one topic to talk about: cultural events, historical achievements, or economic achievements. Which one would you choose?": "Một bảo tàng văn hóa muốn thu hút giới trẻ đến tham quan nhiều hơn. Ba giải pháp: <strong><em>ứng dụng công nghệ thực tế ảo tương tác (VR/AR)</em></strong>, <strong><em>miễn vé vào cửa cho học sinh sinh viên</em></strong>, và <strong><em>mở thêm quán cà phê nghệ thuật và khu check-in sống ảo</em></strong>. Bạn chọn cách nào?", "SITUATION 07: Your school is organizing a presentation about your country. You can choose one topic to talk about: cultural events, historical achievements, or economic achievements. Which one would you choose?": "Một bảo tàng văn hóa muốn thu hút giới trẻ đến tham quan nhiều hơn. Ba giải pháp: <strong><em>ứng dụng công nghệ thực tế ảo tương tác (VR/AR)</em></strong>, <strong><em>miễn vé vào cửa cho học sinh sinh viên</em></strong>, và <strong><em>mở thêm quán cà phê nghệ thuật và khu check-in sống ảo</em></strong>. Bạn chọn cách nào?", "Your school wants to improve the quality of education. There are three areas it can focus on: teachers, students, or facilities. Which one do you think is the most important?": "Bạn muốn tổ chức một chiến dịch truyền thông về lối sống xanh bền vững. Ba chủ đề: <strong><em>tiết kiệm điện nước sinh hoạt</em></strong>, <strong><em>hạn chế sử dụng phương tiện cá nhân</em></strong>, và <strong><em>phân loại rác tại nguồn</em></strong>. Chủ đề nào cấp bách và dễ lan tỏa nhất?", "SITUATION 08: Your school wants to improve the quality of education. There are three areas it can focus on: teachers, students, or facilities. Which one do you think is the most important?": "Bạn muốn tổ chức một chiến dịch truyền thông về lối sống xanh bền vững. Ba chủ đề: <strong><em>tiết kiệm điện nước sinh hoạt</em></strong>, <strong><em>hạn chế sử dụng phương tiện cá nhân</em></strong>, và <strong><em>phân loại rác tại nguồn</em></strong>. Chủ đề nào cấp bách và dễ lan tỏa nhất?", "Your foreign friend wants to learn more about Vietnamese culture during her short trip. She can choose between visiting a traditional village, attending a local festival, or exploring a national museum. Which place would you recommend?": "Một nhãn hàng muốn chọn đại sứ thương hiệu để quảng bá sản phẩm mới. Ba đối tượng: <strong><em>một ca sĩ nổi tiếng có lượng fan lớn</em></strong>, <strong><em>một chuyên gia uy tín trong ngành</em></strong>, và <strong><em>một người truyền cảm hứng có lối sống tích cực</em></strong>. Bạn sẽ chọn ai?", "SITUATION 09: Your foreign friend wants to learn more about Vietnamese culture during her short trip. She can choose between visiting a traditional village, attending a local festival, or exploring a national museum. Which place would you recommend?": "Một nhãn hàng muốn chọn đại sứ thương hiệu để quảng bá sản phẩm mới. Ba đối tượng: <strong><em>một ca sĩ nổi tiếng có lượng fan lớn</em></strong>, <strong><em>một chuyên gia uy tín trong ngành</em></strong>, và <strong><em>một người truyền cảm hứng có lối sống tích cực</em></strong>. Bạn sẽ chọn ai?", "You and your friends are going to celebrate a special occasion together. You are considering three types of meals: a barbecue, a buffet, or a sit-down dinner at a restaurant. Which one would you choose?": "Bạn của bạn muốn xây dựng quỹ tài chính cá nhân an toàn. Ba kênh phân bổ tiền: <strong><em>gửi tiết kiệm ngân hàng lấy lãi</em></strong>, <strong><em>đầu tư vào chứng khoán dài hạn</em></strong>, và <strong><em>mua vàng tích trữ</em></strong>. Bạn khuyên nên ưu tiên kênh nào?", "SITUATION 10: You and your friends are going to celebrate a special occasion together. You are considering three types of meals: a barbecue, a buffet, or a sit-down dinner at a restaurant. Which one would you choose?": "Bạn của bạn muốn xây dựng quỹ tài chính cá nhân an toàn. Ba kênh phân bổ tiền: <strong><em>gửi tiết kiệm ngân hàng lấy lãi</em></strong>, <strong><em>đầu tư vào chứng khoán dài hạn</em></strong>, và <strong><em>mua vàng tích trữ</em></strong>. Bạn khuyên nên ưu tiên kênh nào?", "Your school is organizing a science event, and students are encouraged to contribute in some way. You are considering three options: donating science books, inviting a scientist to give a talk, or organizing a science-themed game. Which one would you choose?": "Một nhóm thanh niên muốn hỗ trợ trẻ em vùng cao trước mùa đông giá rét. Ba hình thức trợ giúp: <strong><em>quyên góp áo ấm và chăn mùa đông</em></strong>, <strong><em>xây dựng phòng học kiên cố mới</em></strong>, và <strong><em>tài trợ bữa ăn dinh dưỡng bán trú</em></strong>. Hoạt động nào ý nghĩa và thiết thực nhất?", "SITUATION 11: Your school is organizing a science event, and students are encouraged to contribute in some way. You are considering three options: donating science books, inviting a scientist to give a talk, or organizing a science-themed game. Which one would you choose?": "Một nhóm thanh niên muốn hỗ trợ trẻ em vùng cao trước mùa đông giá rét. Ba hình thức trợ giúp: <strong><em>quyên góp áo ấm và chăn mùa đông</em></strong>, <strong><em>xây dựng phòng học kiên cố mới</em></strong>, và <strong><em>tài trợ bữa ăn dinh dưỡng bán trú</em></strong>. Hoạt động nào ý nghĩa và thiết thực nhất?", "You are going to study abroad for a short period of time. You want to take a course to improve yourself. You are considering three options: a computer course, a public speaking course, and a time management course. What do you choose?": "Một thành phố du lịch muốn bảo tồn các làng nghề truyền thống đang dần mai một. Ba biện pháp: <strong><em>kết hợp làng nghề vào các tour du lịch trải nghiệm</em></strong>, <strong><em>hỗ trợ vốn và mở lớp truyền nghề cho người trẻ</em></strong>, và <strong><em>bao tiêu đầu ra sản phẩm mỹ nghệ tại các sân bay</em></strong>. Biện pháp nào bền vững nhất?", "SITUATION 12: You are going to study abroad for a short period of time. You want to take a course to improve yourself. You are considering three options: a computer course, a public speaking course, and a time management course. What do you choose?": "Một thành phố du lịch muốn bảo tồn các làng nghề truyền thống đang dần mai một. Ba biện pháp: <strong><em>kết hợp làng nghề vào các tour du lịch trải nghiệm</em></strong>, <strong><em>hỗ trợ vốn và mở lớp truyền nghề cho người trẻ</em></strong>, và <strong><em>bao tiêu đầu ra sản phẩm mỹ nghệ tại các sân bay</em></strong>. Biện pháp nào bền vững nhất?", "Your school is going to organize a year-end party for students. You are asked to take part in the preparation. You are considering three options: decorating the event area, being in charge of organizing the event, and inviting special guests. Which place would you choose?": "Bạn muốn thiết kế một góc thư giãn tại văn phòng làm việc. Ba ý tưởng: <strong><em>khu vực cây xanh và bể cá mini</em></strong>, <strong><em>quầy cà phê và bánh ngọt miễn phí</em></strong>, và <strong><em>ghế massage thư giãn</em></strong>. Bạn nghĩ ý tưởng nào giúp nhân viên nạp lại năng lượng tốt nhất?", "SITUATION 13: Your school is going to organize a year-end party for students. You are asked to take part in the preparation. You are considering three options: decorating the event area, being in charge of organizing the event, and inviting special guests. Which place would you choose?": "Bạn muốn thiết kế một góc thư giãn tại văn phòng làm việc. Ba ý tưởng: <strong><em>khu vực cây xanh và bể cá mini</em></strong>, <strong><em>quầy cà phê và bánh ngọt miễn phí</em></strong>, và <strong><em>ghế massage thư giãn</em></strong>. Bạn nghĩ ý tưởng nào giúp nhân viên nạp lại năng lượng tốt nhất?", "Your nephew has just graduated from high school and is going to enter university. He is considering several factors before choosing a school. Three important things to think about are: tuition fees and living costs, facilities such as libraries and labs, or having supportive friends or classmates. Which one is the best choice?": "Một người bạn muốn học một ngoại ngữ thứ hai sau tiếng Anh. Ba ngôn ngữ được cân nhắc: <strong><em>tiếng Trung</em></strong>, <strong><em>tiếng Nhật</em></strong>, và <strong><em>tiếng Hàn</em></strong>. Bạn sẽ khuyên học tiếng nào dựa trên cơ hội việc làm tại Việt Nam?", "SITUATION 14: Your nephew has just graduated from high school and is going to enter university. He is considering several factors before choosing a school. Three important things to think about are: tuition fees and living costs, facilities such as libraries and labs, or having supportive friends or classmates. Which one is the best choice?": "Một người bạn muốn học một ngoại ngữ thứ hai sau tiếng Anh. Ba ngôn ngữ được cân nhắc: <strong><em>tiếng Trung</em></strong>, <strong><em>tiếng Nhật</em></strong>, và <strong><em>tiếng Hàn</em></strong>. Bạn sẽ khuyên học tiếng nào dựa trên cơ hội việc làm tại Việt Nam?", "Your local authority is planning to improve traffic safety in your city. You are asked to choose the most effective solution among the following: raising public awareness of traffic laws, increasing the legal driving age, and placing more traffic signs around the city. Which one is the best choice?": "Trường học muốn giảm áp lực thi cử cho học sinh THPT. Ba đề xuất: <strong><em>tăng cường đánh giá qua quá trình học và bài tập thực hành</em></strong>, <strong><em>giảm bớt số lượng môn thi cuối kỳ</em></strong>, và <strong><em>bổ sung các buổi tư vấn tâm lý học đường thường xuyên</em></strong>. Đề xuất nào hiệu quả nhất?", "SITUATION 15: Your local authority is planning to improve traffic safety in your city. You are asked to choose the most effective solution among the following: raising public awareness of traffic laws, increasing the legal driving age, and placing more traffic signs around the city. Which one is the best choice?": "Trường học muốn giảm áp lực thi cử cho học sinh THPT. Ba đề xuất: <strong><em>tăng cường đánh giá qua quá trình học và bài tập thực hành</em></strong>, <strong><em>giảm bớt số lượng môn thi cuối kỳ</em></strong>, và <strong><em>bổ sung các buổi tư vấn tâm lý học đường thường xuyên</em></strong>. Đề xuất nào hiệu quả nhất?", "You are going to organize a workshop for students who are looking for internships. You are considering three main topics to include in your workshop: how to improve workplace skills, how to prepare well for job interviews, or how to write an impressive CV/resumé. Which one is the best choice?": "Một doanh nghiệp muốn nâng cao tính gắn kết giữa các phòng ban. Ba hoạt động: <strong><em>tổ chức giải đấu thể thao nội bộ hàng tuần</em></strong>, <strong><em>tổ chức các bữa tiệc trưa tập thể hàng tháng</em></strong>, và <strong><em>tổ chức chuyến dã ngoại nghỉ dưỡng 2 ngày cuối tuần</em></strong>. Hoạt động nào gắn kết tốt nhất?", "SITUATION 16: You are going to organize a workshop for students who are looking for internships. You are considering three main topics to include in your workshop: how to improve workplace skills, how to prepare well for job interviews, or how to write an impressive CV/resumé. Which one is the best choice?": "Một doanh nghiệp muốn nâng cao tính gắn kết giữa các phòng ban. Ba hoạt động: <strong><em>tổ chức giải đấu thể thao nội bộ hàng tuần</em></strong>, <strong><em>tổ chức các bữa tiệc trưa tập thể hàng tháng</em></strong>, và <strong><em>tổ chức chuyến dã ngoại nghỉ dưỡng 2 ngày cuối tuần</em></strong>. Hoạt động nào gắn kết tốt nhất?", "Your younger brother has just graduated from high school and is unsure about what to do next. You are considering three options to suggest to him: finding a job, continuing his studies, or doing volunteer work. Which one would you recommend?": "Bạn của bạn muốn tìm cách rèn luyện tính kiên trì và kỷ luật bản thân. Ba phương pháp: <strong><em>thực hiện thử thách dậy sớm lúc 5h30 sáng mỗi ngày</em></strong>, <strong><em>tham gia tập luyện chuẩn bị cho giải chạy Marathon</em></strong>, và <strong><em>tự học một môn học online đến khi hoàn thành chứng chỉ</em></strong>. Bạn khuyên chọn thử thách nào?", "SITUATION 17: Your younger brother has just graduated from high school and is unsure about what to do next. You are considering three options to suggest to him: finding a job, continuing his studies, or doing volunteer work. Which one would you recommend?": "Bạn của bạn muốn tìm cách rèn luyện tính kiên trì và kỷ luật bản thân. Ba phương pháp: <strong><em>thực hiện thử thách dậy sớm lúc 5h30 sáng mỗi ngày</em></strong>, <strong><em>tham gia tập luyện chuẩn bị cho giải chạy Marathon</em></strong>, và <strong><em>tự học một môn học online đến khi hoàn thành chứng chỉ</em></strong>. Bạn khuyên chọn thử thách nào?", "One day, you receive a large amount of money transferred to your bank account by mistake. You don’t know who sent it. You are considering three options: keeping silent and doing nothing, informing your bank about the transfer, and reporting the case to the police. Which one would you choose?": "Một thành phố ven biển muốn giải quyết vấn đề rác thải trôi dạt vào bờ biển sau mưa bão. Ba giải pháp: <strong><em>lắp đặt hệ thống phao chắn rác thông minh ngoài khơi</em></strong>, <strong><em>huy động lực lượng tình nguyện viên dọn bãi biển định kỳ</em></strong>, và <strong><em>tăng mức phạt đối với các tàu thuyền xả rác bừa bãi</em></strong>. Bạn ủng hộ giải pháp nào?", "SITUATION 18: One day, you receive a large amount of money transferred to your bank account by mistake. You don’t know who sent it. You are considering three options: keeping silent and doing nothing, informing your bank about the transfer, and reporting the case to the police. Which one would you choose?": "Một thành phố ven biển muốn giải quyết vấn đề rác thải trôi dạt vào bờ biển sau mưa bão. Ba giải pháp: <strong><em>lắp đặt hệ thống phao chắn rác thông minh ngoài khơi</em></strong>, <strong><em>huy động lực lượng tình nguyện viên dọn bãi biển định kỳ</em></strong>, và <strong><em>tăng mức phạt đối với các tàu thuyền xả rác bừa bãi</em></strong>. Bạn ủng hộ giải pháp nào?", "Your friend wants to read something new to expand her knowledge and explore the world in a different way. You are considering three book options to recommend to her: a mystery novel, a romance novel, and a science fiction book. Which one would you choose?": "Một người sáng tạo nội dung (YouTuber/Tiktoker) muốn phát triển kênh lâu dài. Ba định hướng nội dung: <strong><em>nội dung giáo dục và chia sẻ kiến thức bổ ích</em></strong>, <strong><em>nội dung giải trí hài hước vui nhộn</em></strong>, và <strong><em>nội dung review trải nghiệm du lịch ẩm thực chân thực</em></strong>. Hướng đi nào bền vững nhất?", "SITUATION 19: Your friend wants to read something new to expand her knowledge and explore the world in a different way. You are considering three book options to recommend to her: a mystery novel, a romance novel, and a science fiction book. Which one would you choose?": "Một người sáng tạo nội dung (YouTuber/Tiktoker) muốn phát triển kênh lâu dài. Ba định hướng nội dung: <strong><em>nội dung giáo dục và chia sẻ kiến thức bổ ích</em></strong>, <strong><em>nội dung giải trí hài hước vui nhộn</em></strong>, và <strong><em>nội dung review trải nghiệm du lịch ẩm thực chân thực</em></strong>. Hướng đi nào bền vững nhất?", "You are planning to change your job. There are three important factors to consider when making your decision: better career prospects, a higher salary, and a more flexible job. Which one would you choose?": "Bạn muốn chuẩn bị tốt nhất cho kỳ thi VSTEP Speaking trong 2 tuần cuối trước ngày thi. Ba cách ôn tập: <strong><em>luyện nói theo đồng hồ bấm giờ chuẩn 4 phút mỗi ngày</em></strong>, <strong><em>học thuộc lòng các bài mẫu điểm cao</em></strong>, và <strong><em>thu âm bài nói và nhờ giáo viên sửa lỗi phát âm ngữ pháp</em></strong>. Cách nào giúp nâng cao phản xạ và tự tin nhất?", "SITUATION 20: You are planning to change your job. There are three important factors to consider when making your decision: better career prospects, a higher salary, and a more flexible job. Which one would you choose?": "Bạn muốn chuẩn bị tốt nhất cho kỳ thi VSTEP Speaking trong 2 tuần cuối trước ngày thi. Ba cách ôn tập: <strong><em>luyện nói theo đồng hồ bấm giờ chuẩn 4 phút mỗi ngày</em></strong>, <strong><em>học thuộc lòng các bài mẫu điểm cao</em></strong>, và <strong><em>thu âm bài nói và nhờ giáo viên sửa lỗi phát âm ngữ pháp</em></strong>. Cách nào giúp nâng cao phản xạ và tự tin nhất?"};

window.toggleTranslation = function(btn) {
    const card = btn.closest('.practice-situation-card') || btn.closest('.prompt-banner-box') || btn.closest('.sample-spotlight');
    if (!card) return;
    const transBox = card.querySelector('.sit-translation-box');
    if (!transBox) return;

    const isHidden = transBox.classList.contains('hidden');
    if (isHidden) {
        transBox.classList.remove('hidden');
        btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Ẩn dịch';
        btn.style.color = 'var(--primary)';
        btn.style.borderColor = 'var(--primary)';
        btn.style.background = 'rgba(37, 99, 235, 0.08)';
    } else {
        transBox.classList.add('hidden');
        btn.innerHTML = '<i class="fa-solid fa-language"></i> Dịch đề';
        btn.style.color = '';
        btn.style.borderColor = '';
        btn.style.background = '';
    }
};

window.toggleSampleAnswer = function(btn) {
    const card = btn.closest('.practice-situation-card') || btn.closest('.prompt-banner-box') || btn.closest('.sample-spotlight');
    if (!card) return;
    const sampleBox = card.querySelector('.sit-sample-box');
    const ideasBox = card.querySelector('.sit-ideas-box');
    const ideasBtn = card.querySelector('.btn-ideas-toggle');
    const sampleBtn = card.querySelector('.btn-sample-toggle') || btn;
    if (!sampleBox) return;

    const isCurrentlyActive = sampleBtn.classList.contains('active-tab-sample') && !sampleBox.classList.contains('hidden') && sampleBox.style.display !== 'none';

    if (isCurrentlyActive) {
        // Thu gọn khi bấm lại chính tab đang mở
        sampleBox.classList.add('hidden');
        sampleBox.style.display = 'none';
        sampleBtn.classList.remove('active-tab-sample');
    } else {
        // Chuyển sang Tab Bài nói mẫu mượt mà tức thì, không cần bấm Ẩn
        if (ideasBox) {
            ideasBox.classList.add('hidden');
            ideasBox.style.display = 'none';
        }
        if (ideasBtn) {
            ideasBtn.classList.remove('active-tab-ideas');
        }

        sampleBox.classList.remove('hidden');
        sampleBox.style.display = 'block';
        sampleBtn.classList.add('active-tab-sample');

        // Đảm bảo panel bài mẫu bên trong hiển thị
        const activePanel = sampleBox.querySelector('.sit-sample-opt-panel:not(.hidden)') || sampleBox.querySelector('.sit-sample-opt-panel');
        if (activePanel) {
            activePanel.classList.remove('hidden');
            activePanel.style.display = 'block';
        }
    }
};

window.toggleIdeas = function(btn) {
    const card = btn.closest('.practice-situation-card') || btn.closest('.prompt-banner-box') || btn.closest('.sample-spotlight');
    if (!card) return;
    const ideasBox = card.querySelector('.sit-ideas-box');
    const sampleBox = card.querySelector('.sit-sample-box');
    const sampleBtn = card.querySelector('.btn-sample-toggle');
    const ideasBtn = card.querySelector('.btn-ideas-toggle') || btn;
    if (!ideasBox) return;

    const isCurrentlyActive = ideasBtn.classList.contains('active-tab-ideas') && !ideasBox.classList.contains('hidden') && ideasBox.style.display !== 'none';

    if (isCurrentlyActive) {
        // Thu gọn khi bấm lại chính tab đang mở
        ideasBox.classList.add('hidden');
        ideasBox.style.display = 'none';
        ideasBtn.classList.remove('active-tab-ideas');
    } else {
        // Chuyển sang Tab Gợi ý ý tưởng mượt mà tức thì, không cần bấm Ẩn
        if (sampleBox) {
            sampleBox.classList.add('hidden');
            sampleBox.style.display = 'none';
        }
        if (sampleBtn) {
            sampleBtn.classList.remove('active-tab-sample');
        }

        ideasBox.classList.remove('hidden');
        ideasBox.style.display = 'block';
        ideasBtn.classList.add('active-tab-ideas');

        // Đảm bảo panel ý tưởng bên trong hiển thị
        const activePanel = ideasBox.querySelector('.sit-ideas-opt-panel:not(.hidden)') || ideasBox.querySelector('.sit-ideas-opt-panel');
        if (activePanel) {
            activePanel.classList.remove('hidden');
            activePanel.style.display = 'block';
        }
    }
};

window.closeSitPanel = function(btn) {
    const card = btn.closest('.practice-situation-card') || btn.closest('.prompt-banner-box') || btn.closest('.sample-spotlight');
    if (!card) return;
    const ideasBox = card.querySelector('.sit-ideas-box');
    const sampleBox = card.querySelector('.sit-sample-box');
    const ideasBtn = card.querySelector('.btn-ideas-toggle');
    const sampleBtn = card.querySelector('.btn-sample-toggle');

    if (ideasBox) {
        ideasBox.classList.add('hidden');
        ideasBox.style.display = 'none';
    }
    if (sampleBox) {
        sampleBox.classList.add('hidden');
        sampleBox.style.display = 'none';
    }
    if (ideasBtn) ideasBtn.classList.remove('active-tab-ideas');
    if (sampleBtn) sampleBtn.classList.remove('active-tab-sample');
};

window.switchToSample = function(btn) {
    const card = btn.closest('.practice-situation-card') || btn.closest('.prompt-banner-box') || btn.closest('.sample-spotlight');
    if (!card) return;
    const sampleBtn = card.querySelector('.btn-sample-toggle');
    if (sampleBtn) window.toggleSampleAnswer(sampleBtn);
};

window.switchToIdeas = function(btn) {
    const card = btn.closest('.practice-situation-card') || btn.closest('.prompt-banner-box') || btn.closest('.sample-spotlight');
    if (!card) return;
    const ideasBtn = card.querySelector('.btn-ideas-toggle');
    if (ideasBtn) window.toggleIdeas(ideasBtn);
};

window.switchIdeaCard = function(btn, panelId) {
    const box = btn.closest('.sit-ideas-box');
    if (!box) return;
    const nav = btn.closest('.sit-ideas-nav');
    if (nav) {
        nav.querySelectorAll('.sit-ideas-opt-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }
    box.querySelectorAll('.sit-ideas-opt-panel').forEach(p => {
        p.classList.add('hidden');
        p.style.display = 'none';
    });
    const target = box.querySelector('#' + panelId);
    if (target) {
        target.classList.remove('hidden');
        target.style.display = 'block';
    }
};

window.switchSampleCard = function(btn, panelId) {
    const box = btn.closest('.sit-sample-box');
    if (!box) return;
    
    // Switch active button in the nav
    const nav = btn.closest('.sit-sample-nav');
    if (nav) {
        nav.querySelectorAll('.sit-sample-opt-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }
    
    // Hide all panels inside this box, then show target
    box.querySelectorAll('.sit-sample-opt-panel').forEach(p => {
        p.classList.add('hidden');
        p.style.display = 'none';
    });
    const targetPanel = box.querySelector('#' + panelId) || document.getElementById(panelId);
    if (targetPanel) {
        targetPanel.classList.remove('hidden');
        targetPanel.style.display = 'block';
    }
};

window.speakCardSample = function(btn) {
    const container = btn.closest('.sample-card-panel') || btn.closest('.sit-sample-opt-panel') || btn.closest('.sit-sample-box');
    if (!container) return;
    const textEl = container.querySelector('.sample-speech-full');
    if (textEl) {
        speakText(textEl.innerText.trim(), btn);
    }
};

window.copyCardSample = function(btn) {
    const container = btn.closest('.sample-card-panel') || btn.closest('.sit-sample-opt-panel') || btn.closest('.sit-sample-box');
    if (!container) return;
    const textEl = container.querySelector('.sample-speech-full');
    if (textEl) {
        copyText(textEl.innerText.trim());
    }
};


/**
 * VSTEP SPEAKING PART 02 (B2 LEVEL) - INTERACTIVE ENGINE
 * Natural Spoken Speech Synthesis & Study Tools
 * Created for Ms. Nguyet's Students
 */

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

// State
const state = {
    student: {
        name: localStorage.getItem('vstep_sp2_b2_name') || '',
        classCode: localStorage.getItem('vstep_sp2_b2_class') || ''
    },
    audioEnabled: true,
    selectedVoiceURI: localStorage.getItem('vstep_voice_uri') || null,
    theme: localStorage.getItem('vstep_theme') || 'light',
    activeTab: 'overview',
    flashcards: [],
    currentCardIdx: 0,
    timer: {
        interval: null,
        phase: 'idle', // 'idle', 'prep', 'speak', 'finished'
        timeLeft: 60,
        totalTime: 60,
        isPaused: false
    }
};

function initApp() {
    initAuth();
    initTheme();
    initNavigation();
    initSpeechSynthesis();
    initAnswerBuilder();
    initExamTimerAndRecorder();
    initFlashcards();

    const sampleFullBtn = document.getElementById('play-full-sample-btn');
    if (sampleFullBtn) {
        sampleFullBtn.addEventListener('click', () => {
            const fullText = "Well, if we had to choose an activity for our family upcoming day off, we would definitely go for going to the countryside. First of all, going to the countryside is a meaningful activity because it allows our family to enjoy the fresh air, escape the busy city, and relax together in nature. Secondly, it’s a wonderful way for all family members to spend quality time together and strengthen our family bond. We would not choose going to the cinema because it’s quite passive and we cannot talk freely inside the theater. As for going shopping, it’s less suitable because shopping centers are usually crowded and expensive. In short, we strongly believe that going to the countryside is the best choice for our family.";
            speakText(fullText);
        });
    }

}

/* ==========================================================================
   1. ACCESS CONTROL, AUTH & ATTENDANCE TRACKING (B212)
   ========================================================================== */
const UNLOCKED_TABS_B212 = ['overview', 'group-gift'];

const validStudentsB212 = [
    "Nguyễn Duy Hồng Anh",
    "Nguyễn Ngọc Minh Anh",
    "Nguyễn Lê Mỹ Hân",
    "Nguyễn Hồng Minh Huy",
    "Nguyễn Quốc Khải",
    "Đoàn Nguyễn Đình Khang",
    "Lê Nguyễn Gia Khánh",
    "Nguyễn Hữu Khánh",
    "Hồ Thị Ngọc Lan",
    "Trần Thị Hồng Lỉnh",
    "Võ Thị Triệu Minh",
    "Hứa Đình Nghi",
    "Võ Thị Bảo Ngọc",
    "Lê Tiến Phát",
    "Nguyễn Hoàng Thông",
    "Nguyễn Kim Tiền",
    "Lê Thị Bảo Trân",
    "Võ Thị Diễm Trinh",
    "Nguyễn Tiến Trung",
    "Trần Thị Ánh Tuyết",
    "Đặng Nguyễn Khánh Uyên",
    "Nguyễn Thị Chúc Yến"
];

function normalizeStr(str) {
    return (str || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[đĐ]/g, 'd')
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .trim();
}

function checkIfTeacher(name, classCode) {
    const formattedClass = (classCode || '').toUpperCase().replace(/\s+/g, '');
    const normName = normalizeStr(name || '');
    return formattedClass === 'GV' || 
           formattedClass === 'GV2026' || 
           formattedClass === '2026' || 
           formattedClass === 'ADMIN' ||
           formattedClass === 'TEACHER' ||
           normName.includes('ptmn') || 
           normName.includes('co nguyet') || 
           normName.includes('minh nguyet') || 
           normName.includes('ms nguyet') || 
           normName.includes('pham thi minh nguyet') ||
           normName === 'nguyet' ||
           normName.includes('giao vien');
}

function applyAccessControl(isTeacher) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const target = item.dataset.target;
        const existingPill = item.querySelector('.lock-pill');
        if (existingPill) existingPill.remove();

        if (isTeacher || UNLOCKED_TABS_B212.includes(target)) {
            item.classList.remove('locked');
            item.removeAttribute('title');
        } else {
            item.classList.add('locked');
            item.setAttribute('title', 'Tạm khóa cho lớp B212');
            const link = item.querySelector('a');
            if (link) {
                const pill = document.createElement('span');
                pill.className = 'lock-pill';
                pill.innerHTML = '<i class="fa-solid fa-lock"></i> Khóa';
                link.appendChild(pill);
            }
        }
    });
}

function initAuth() {
    const welcomeModal = document.getElementById('welcome-modal');
    const startBtn = document.getElementById('start-btn');
    const nameInput = document.getElementById('student-name');
    const classInput = document.getElementById('student-class');
    const errorMsg = document.getElementById('login-error');
    const userProfile = document.getElementById('user-profile');
    const displayName = document.getElementById('display-name');
    const trackingForm = document.getElementById('tracking-form');
    const entryInput = document.getElementById('entry_388968236');

    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc1mIvmT7FQBOL415zz3Hm4iQBHJZqziNla9Z70Ozm4ihIqwA/formResponse";
    const ENTRY_FIELD = "entry.388968236";

    // Clean up previously saved credentials if not teacher and not B212
    const savedName = localStorage.getItem('vstep_sp2_b2_name') || '';
    const savedClass = localStorage.getItem('vstep_sp2_b2_class') || '';
    const isTeacherSaved = checkIfTeacher(savedName, savedClass);
    
    if (savedClass && !isTeacherSaved && savedClass.toUpperCase().replace(/\s+/g, '') !== 'B212') {
        localStorage.removeItem('vstep_sp2_b2_name');
        localStorage.removeItem('vstep_sp2_b2_class');
        state.student.name = '';
        state.student.classCode = '';
    } else if (savedClass) {
        state.student.name = savedName;
        state.student.classCode = savedClass;
        if (displayName) displayName.textContent = `${savedName} (${savedClass})`;
        if (userProfile) userProfile.classList.remove('hidden');
    }

    if (nameInput && state.student.name) nameInput.value = state.student.name;
    if (classInput && state.student.classCode) classInput.value = state.student.classCode;

    // Show modal on startup to verify student / teacher
    if (welcomeModal) {
        welcomeModal.classList.remove('hidden');
        welcomeModal.style.display = 'flex';
        welcomeModal.style.opacity = '1';
    }

    let isSubmitting = false;

    window.finishLogin = (finalName, finalClass) => {
        finalName = finalName || state.student.name || 'Học viên';
        finalClass = finalClass || state.student.classCode || 'B212';

        state.student.name = finalName;
        state.student.classCode = finalClass;
        localStorage.setItem('vstep_sp2_b2_name', finalName);
        localStorage.setItem('vstep_sp2_b2_class', finalClass);

        const isTeacher = checkIfTeacher(finalName, finalClass);
        applyAccessControl(isTeacher);

        if (!isTeacher && !UNLOCKED_TABS_B212.includes(state.activeTab)) {
            if (typeof window.switchTab === 'function') {
                window.switchTab('group-gift');
            }
        }

        if (displayName) displayName.textContent = `${finalName} (${finalClass})`;
        if (userProfile) userProfile.classList.remove('hidden');

        if (welcomeModal) {
            welcomeModal.style.opacity = '0';
            welcomeModal.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                welcomeModal.classList.add('hidden');
                welcomeModal.style.display = 'none';
            }, 300);
        }

        if (startBtn) {
            startBtn.disabled = false;
            startBtn.innerHTML = 'BẮT ĐẦU HỌC NGAY';
        }
        isSubmitting = false;

        showToast(`Chào mừng ${finalName} - Lớp ${finalClass} đến với bài học Speaking Part 02! 🚀`);
    };

    function enterApp() {
        if (isSubmitting) return;

        const nameVal = nameInput ? nameInput.value.trim() : '';
        const classVal = classInput ? classInput.value.trim() : '';

        if (!nameVal || !classVal) {
            if (errorMsg) {
                errorMsg.textContent = 'Vui lòng nhập đầy đủ Họ tên và Lớp học!';
                errorMsg.style.display = 'block';
            }
            if (!nameVal && nameInput) nameInput.focus();
            else if (!classVal && classInput) classInput.focus();
            return;
        }

        const formattedClass = classVal.toUpperCase().replace(/\s+/g, '');
        const normName = normalizeStr(nameVal);
        const isTeacher = checkIfTeacher(nameVal, formattedClass);

        let finalName = nameVal;
        let finalClass = formattedClass;

        if (isTeacher) {
            finalName = nameVal || 'Cô Nguyệt (PTMN)';
            finalClass = formattedClass || 'GV';
        } else {
            // Strict check: Chỉ nhận lớp B212
            if (formattedClass !== 'B212') {
                if (errorMsg) {
                    errorMsg.textContent = 'Mã lớp không hợp lệ! Trang web hiện tại dành riêng cho lớp B212.';
                    errorMsg.style.display = 'block';
                }
                if (classInput) classInput.focus();
                return;
            }

            // Kiểm tra danh sách học viên lớp B212
            const matchedStudent = validStudentsB212.find(s => normalizeStr(s) === normName);
            if (matchedStudent) {
                finalName = matchedStudent;
                finalClass = 'B212';
            } else {
                if (errorMsg) {
                    errorMsg.textContent = 'Họ tên không có trong danh sách lớp B212. Vui lòng kiểm tra lại họ tên có dấu!';
                    errorMsg.style.display = 'block';
                }
                if (nameInput) nameInput.focus();
                return;
            }
        }

        if (errorMsg) errorMsg.style.display = 'none';
        isSubmitting = true;

        if (startBtn) {
            startBtn.disabled = true;
            startBtn.innerHTML = '<span>Đang vào lớp...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
        }

        state.student.name = finalName;
        state.student.classCode = finalClass;

        const logData = `${finalName} - Lớp: ${finalClass}`;

        // Gửi thông tin về Google Form (dual-channel)
        if (trackingForm && entryInput) {
            entryInput.value = logData;
            window.submitted = true;
            try {
                trackingForm.submit();
            } catch (e) {
                console.warn('Iframe form submit error:', e);
            }
        }

        try {
            const formData = new FormData();
            formData.append(ENTRY_FIELD, logData);
            fetch(GOOGLE_FORM_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            }).catch(e => console.warn('Fetch tracking warn:', e));
        } catch (e) {
            console.warn('Fetch init warn:', e);
        }

        // Fallback timeout sau 800ms
        setTimeout(() => {
            if (welcomeModal && (!welcomeModal.classList.contains('hidden') || welcomeModal.style.display !== 'none')) {
                window.finishLogin(finalName, finalClass);
            }
        }, 800);
    }

    if (startBtn) {
        startBtn.addEventListener('click', enterApp);
    }

    // Allow user to click their profile in the sidebar to change info or re-login
    if (userProfile) {
        userProfile.style.cursor = 'pointer';
        userProfile.title = 'Nhấp để đổi thông tin học viên';
        userProfile.addEventListener('click', () => {
            if (welcomeModal) {
                welcomeModal.style.display = 'flex';
                welcomeModal.classList.remove('hidden');
                welcomeModal.style.opacity = '1';
                if (startBtn) {
                    startBtn.disabled = false;
                    startBtn.innerHTML = 'CẬP NHẬT & VÀO HỌC';
                }
                if (nameInput) nameInput.focus();
            }
        });
    }

    // Enter key support
    if (nameInput) {
        nameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                if (classInput) classInput.focus();
                else enterApp();
            }
        });
    }
    if (classInput) {
        classInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') enterApp();
        });
    }
}

/* ==========================================================================
   2. THEME & NAVIGATION (LOCKING LOGIC)
   ========================================================================== */
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (state.theme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        state.theme = isDark ? 'dark' : 'light';
        localStorage.setItem('vstep_theme', state.theme);
        themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
}

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const sidebar = document.getElementById('sidebar');
    const sidebarBackdrop = document.getElementById('sidebar-backdrop');
    const topTitle = document.getElementById('top-title');
    const mobileToggle = document.getElementById('mobile-toggle');

    function closeSidebar() {
        if (sidebar) sidebar.classList.remove('open');
        if (sidebarBackdrop) sidebarBackdrop.classList.remove('active');
    }

    window.switchTab = function(targetId) {
        const isTeacher = checkIfTeacher(state.student.name, state.student.classCode);
        if (!isTeacher && !UNLOCKED_TABS_B212.includes(targetId)) {
            showToast('🔒 Nội dung này đang tạm khóa cho lớp B212 và sẽ được mở trong các buổi học tiếp theo!');
            targetId = 'group-gift';
        }

        state.activeTab = targetId;

        navItems.forEach(item => {
            if (item.dataset.target === targetId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        tabPanes.forEach(pane => {
            if (pane.id === targetId) {
                pane.classList.add('active');
            } else {
                pane.classList.remove('active');
            }
        });

        const activeNavItem = document.querySelector(`.nav-item[data-target="${targetId}"]`);
        if (activeNavItem) {
            const rawTitle = activeNavItem.querySelector('span') ? activeNavItem.querySelector('span').textContent : '';
            topTitle.textContent = rawTitle.replace('📖 ', '').replace('Khóa', '').trim().toUpperCase();
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (window.innerWidth <= 768) {
            closeSidebar();
        }
    };

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = item.dataset.target;
            if (!target) return;

            const isTeacher = checkIfTeacher(state.student.name, state.student.classCode);
            if (!isTeacher && !UNLOCKED_TABS_B212.includes(target)) {
                showToast('🔒 Nội dung này đang tạm khóa cho lớp B212 và sẽ được mở trong các buổi học tiếp theo!');
                return;
            }

            window.switchTab(target);
            history.pushState(null, null, `#${target}`);
        });
    });

    if (mobileToggle) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = sidebar.classList.toggle('open');
            if (sidebarBackdrop) {
                if (isOpen) sidebarBackdrop.classList.add('active');
                else sidebarBackdrop.classList.remove('active');
            }
        });
    }

    if (sidebarBackdrop) {
        sidebarBackdrop.addEventListener('click', closeSidebar);
    }

    // Tap outside sidebar on mobile to close
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('open')) {
            if (!sidebar.contains(e.target) && !mobileToggle?.contains(e.target)) {
                closeSidebar();
            }
        }
    });

    // Apply access control & initial tab display
    const isTeacher = checkIfTeacher(state.student.name, state.student.classCode);
    applyAccessControl(isTeacher);

    // Hash check on load
    const currentHash = window.location.hash.replace('#', '');
    if (currentHash && document.getElementById(currentHash)) {
        if (!isTeacher && !UNLOCKED_TABS_B212.includes(currentHash)) {
            window.switchTab('group-gift');
        } else {
            window.switchTab(currentHash);
        }
    } else {
        window.switchTab('overview');
    }
}

// Global sub-tab switch
window.switchSubTab = function(btn, subTabId) {
    const parentContainer = btn.closest('.tab-pane');
    if (!parentContainer) return;
    
    const allBtns = parentContainer.querySelectorAll('.cat-subtab-btn, .clean-subtab-btn, button[onclick*="switchSubTab"]');
    const allPanels = parentContainer.querySelectorAll('.sub-tab-panel');

    allBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    allPanels.forEach(panel => {
        if (panel.id === subTabId) {
            panel.classList.remove('hidden');
            panel.style.display = 'block';
        } else {
            panel.classList.add('hidden');
            panel.style.display = 'none';
        }
    });
};

/* ==========================================================================
   3. NATURAL SPOKEN SPEECH ENGINE
   Warm, relaxed, natural pacing (0.92x) with conversational prosody & pauses
   ========================================================================== */
let availableVoices = [];

// ==========================================================================
// NATURAL HUMAN & NEURAL SPEECH ENGINE (Web Speech API + Smart Filtering)
// ==========================================================================
var activeHumanAudioPlayer = null;
var activeUtterance = null;
var audioQueue = [];
var currentQueueIndex = 0;
var isPlayingQueue = false;

function stopAllAudio() {
    if (activeHumanAudioPlayer) {
        activeHumanAudioPlayer.pause();
        activeHumanAudioPlayer.currentTime = 0;
        activeHumanAudioPlayer = null;
    }
    if (window._speechKeepAlive) {
        clearInterval(window._speechKeepAlive);
        window._speechKeepAlive = null;
    }
    audioQueue = [];
    currentQueueIndex = 0;
    isPlayingQueue = false;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    activeUtterance = null;
    document.querySelectorAll('.btn-speaking-active').forEach(b => b.classList.remove('btn-speaking-active'));
}

/**
 * Intelligent selector for the most natural, human-sounding English voices
 * Prioritizes Microsoft Neural, Apple Siri/Enhanced, Google US/UK, and filters mechanical voices
 */
function getBestNaturalVoice(voices) {
    if (!voices || voices.length === 0) return null;
    const enVoices = voices.filter(v => v.lang && (v.lang.toLowerCase().startsWith('en') || v.lang.toLowerCase().startsWith('us')));
    if (enVoices.length === 0) return null;

    // 1. Highest priority: Modern Neural / Natural / Premium / Studio / Enhanced / Siri
    const premiumKeywords = ['natural', 'premium', 'enhanced', 'neural', 'studio', 'siri', 'wavenet'];
    for (const kw of premiumKeywords) {
        const match = enVoices.find(v => (v.name && v.name.toLowerCase().includes(kw)) || (v.voiceURI && v.voiceURI.toLowerCase().includes(kw)));
        if (match) return match;
    }

    // 2. High-quality Apple modern human voices (macOS & iOS)
    const appleModernNames = ['ava', 'evan', 'allison', 'zoe', 'nathan', 'oliver', 'serena', 'daniel', 'samantha (enhanced)'];
    for (const name of appleModernNames) {
        const match = enVoices.find(v => v.name && v.name.toLowerCase().includes(name));
        if (match) return match;
    }

    // 3. Desktop browser / Windows Natural voices
    const desktopModern = ['jenny', 'guy', 'aria', 'google us english', 'google uk english female'];
    for (const name of desktopModern) {
        const match = enVoices.find(v => v.name && v.name.toLowerCase().includes(name));
        if (match) return match;
    }

    // 4. Exclude legacy mechanical robotic voices if alternatives exist
    const nonRobotic = enVoices.filter(v => {
        const n = (v.name || '').toLowerCase();
        return !n.includes('alex') && !n.includes('fred') && !n.includes('victoria') &&
               !n.includes('ralph') && !n.includes('zarvox') && !n.includes('trinoids') &&
               !n.includes('bells') && !n.includes('bad news') && !n.includes('organ') &&
               !n.includes('cellos') && !n.includes('junior');
    });

    if (nonRobotic.length > 0) {
        return nonRobotic.find(v => v.lang.includes('US') || v.lang.includes('en-US')) ||
               nonRobotic.find(v => v.lang.includes('GB') || v.lang.includes('en-GB')) ||
               nonRobotic[0];
    }

    return enVoices[0];
}

/**
 * Populate voice dropdown with available English voices matching SPEAKING PART 01 hierarchy
 */
function populateVoices() {
    if (!('speechSynthesis' in window)) return;
    const voiceSelect = document.getElementById('voice-select');
    const voices = window.speechSynthesis.getVoices() || [];
    availableVoices = voices.filter(v => v.lang && (v.lang.toLowerCase().startsWith('en') || v.lang.toLowerCase().startsWith('us')));

    if (availableVoices.length === 0) return;

    let defaultVoice = null;
    if (state.selectedVoiceURI) {
        defaultVoice = availableVoices.find(v => v.voiceURI === state.selectedVoiceURI);
    }
    if (!defaultVoice) {
        const preferredNames = [
            "Microsoft Guy",
            "Google UK English Male",
            "Google US English Male",
            "Alex",
            "Daniel",
            "Google US English",
            "Samantha"
        ];
        for (let name of preferredNames) {
            defaultVoice = availableVoices.find(v => v.name && v.name.includes(name));
            if (defaultVoice) break;
        }
        if (!defaultVoice) {
            defaultVoice = getBestNaturalVoice(availableVoices);
        }
    }

    if (!state.selectedVoiceURI && defaultVoice) {
        state.selectedVoiceURI = defaultVoice.voiceURI;
        localStorage.setItem('vstep_voice_uri', defaultVoice.voiceURI);
    }

    if (voiceSelect) {
        const currentSelected = state.selectedVoiceURI || voiceSelect.value;
        voiceSelect.innerHTML = '';

        availableVoices.forEach(v => {
            const opt = document.createElement('option');
            opt.value = v.voiceURI;
            let label = v.name
                .replace('Microsoft ', '')
                .replace('Online (Natural) - English (United States)', 'US (Tự nhiên ✨)')
                .replace('Online (Natural) - English (United Kingdom)', 'UK (Tự nhiên ✨)')
                .replace(' - English (United States)', ' (US)')
                .replace(' - English (United Kingdom)', ' (UK)');

            const isNeural = /natural|neural|siri|enhanced|premium|studio/i.test(v.name);
            if (isNeural) {
                label = `✨ ${label}`;
            } else {
                label = `🎙️ ${label}`;
            }

            opt.textContent = `${label} [${v.lang}]`;
            voiceSelect.appendChild(opt);
        });

        if (currentSelected && availableVoices.some(v => v.voiceURI === currentSelected)) {
            voiceSelect.value = currentSelected;
        } else if (defaultVoice) {
            voiceSelect.value = defaultVoice.voiceURI;
        }
    }
}

function initSpeechSynthesis() {
    const voiceSelect = document.getElementById('voice-select');
    const speedSelect = document.getElementById('speed-select');
    const audioToggle = document.getElementById('audio-toggle');

    if ('speechSynthesis' in window) {
        populateVoices();
        window.speechSynthesis.onvoiceschanged = () => populateVoices();
        
        // Touch handler for mobile Safari / Chrome audio unlock
        window.addEventListener('touchstart', () => {
            if (window.speechSynthesis && (!availableVoices || availableVoices.length === 0)) {
                window.speechSynthesis.getVoices();
                populateVoices();
            }
        }, { once: true });
    }

    if (voiceSelect) {
        voiceSelect.addEventListener('change', (e) => {
            state.selectedVoiceURI = e.target.value;
            localStorage.setItem('vstep_voice_uri', e.target.value);
            const selectedOpt = voiceSelect.options[voiceSelect.selectedIndex];
            showToast(`Đã chọn: ${selectedOpt ? selectedOpt.text : 'Giọng tự nhiên'}`);
            speakText("Well, let's practice speaking naturally and fluently.");
        });
    }

    if (speedSelect) {
        let savedSpeed = localStorage.getItem('vstep_voice_speed');
        if (!savedSpeed || savedSpeed === '0.92') {
            savedSpeed = '1.0';
            localStorage.setItem('vstep_voice_speed', '1.0');
        }
        speedSelect.value = savedSpeed;
        speedSelect.addEventListener('change', (e) => {
            localStorage.setItem('vstep_voice_speed', e.target.value);
            showToast(`Tốc độ: ${e.target.options[e.target.selectedIndex].text}`);
        });
    }

    if (audioToggle) {
        audioToggle.addEventListener('click', () => {
            state.audioEnabled = !state.audioEnabled;
            audioToggle.classList.toggle('active', state.audioEnabled);
            if (!state.audioEnabled) {
                stopAllAudio();
            }
            showToast(state.audioEnabled ? 'Đã bật âm thanh giọng mẫu' : 'Đã tắt âm thanh');
        });
    }
}

/**
 * Clean spoken text helper
 */
function cleanSpokenText(raw) {
    let text = raw
        .replace(/<[^>]+>/g, '')
        .replace(/love\(s\)/gi, 'loves')
        .replace(/need\(s\)/gi, 'need')
        .replace(/care\(s\)/gi, 'care')
        .replace(/start\(s\)/gi, 'starts')
        .replace(/enjoy\(s\)/gi, 'enjoys')
        .replace(/don[’']t \/ doesn[’']t like/gi, "doesn't like")
        .replace(/don[’']t \/ doesn[’']t/gi, "don't")
        .replace(/have \/ has/gi, 'has')
        .replace(/has \/ have/gi, 'has')
        .replace(/\[tính từ sở hữu của người tặng\]/gi, 'our')
        .replace(/\[tính từ sở hữu của người nhận\]/gi, 'his')
        .replace(/\[tính từ sở hữu\]/gi, 'our')
        .replace(/\[người nhận\s*[-–]\s*chủ từ\]/gi, 'she')
        .replace(/\[người nhận\s*[-–]\s*túc từ\]/gi, 'her')
        .replace(/\[người tặng\s*[-–]\s*chủ từ\]/gi, 'we')
        .replace(/\[người tặng\s*[-–]\s*túc từ\]/gi, 'us')
        .replace(/\[người nhận\]/gi, 'she')
        .replace(/\[người tặng\]/gi, 'we')
        .replace(/\[chủ từ\]/gi, 'I')
        .replace(/\[đối tượng – túc từ\]/gi, 'me')
        .replace(/\[đối tượng – chủ từ\]/gi, 'I')
        .replace(/\[đối tượng\]/gi, 'us')
        .replace(/\[túc từ\]/gi, 'them')
        .replace(/\[tính từ sở hữu\]/gi, 'my')
        .replace(/\[lựa chọn của mình\]/gi, 'this choice')
        .replace(/\[lựa chọn phù hợp\]/gi, 'this option')
        .replace(/\[diễn đạt tình huống\]/gi, 'an activity for this weekend')
        .replace(/\[phương án không chọn 1\]/gi, 'the second option')
        .replace(/\[phương án không chọn 2\]/gi, 'the third option')
        .replace(/\[lợi ích giải trí 1\]/gi, 'relax after hard work')
        .replace(/\[lợi ích giải trí 2\]/gi, 'reduce stress and feel refreshed')
        .replace(/\[lợi ích giáo dục 1\]/gi, 'broaden knowledge')
        .replace(/\[lợi ích giáo dục 2\]/gi, 'learn new things')
        .replace(/\[lợi ích sức khoẻ 1\]/gi, 'stay active and burn calories')
        .replace(/\[lợi ích sức khoẻ 2\]/gi, 'improve physical fitness')
        .replace(/\[lợi ích 1\]/gi, 'carry personal items')
        .replace(/\[lợi ích 2\]/gi, 'keep belongings organized')
        .replace(/\[lợi ích.*?\]/gi, 'relax and feel refreshed')
        .replace(/\[hoạt động liên quan đến món quà\]/gi, 'carrying a handbag')
        .replace(/\[hoạt động – ving\]/gi, 'Traveling')
        .replace(/\[hoạt động – v-ing\]/gi, 'Traveling')
        .replace(/\[hoạt động\]/gi, 'this activity')
        .replace(/\[địa điểm\]/gi, 'this place')
        .replace(/\[giải pháp\]/gi, 'this solution')
        .replace(/\[mục đích – ving\]/gi, 'working and relaxing')
        .replace(/\[mục đích – v-ing\]/gi, 'working and relaxing')
        .replace(/\[mục đích\]/gi, 'solve this issue')
        .replace(/\[sự kiện\]/gi, 'this event')
        .replace(/\[sở thích\]/gi, 'fashion')
        .replace(/\[kể tên.*?\]/gi, 'many traditional specialties')
        .replace(/\[liệt kê.*?\]/gi, 'communication and teamwork skills')
        .replace(/\[.*?\]/g, 'this option')
        .replace(/➔/g, '')
        .replace(/→/g, '')
        .replace(/▪/g, '')
        .replace(/–/g, '-')
        .replace(/["“”]/g, '')
        .trim();

    return text
        .replace(/\bWell\b(?!,)/g, 'Well,')
        .replace(/\bFirstly\b(?!,)/g, 'Firstly,')
        .replace(/\bFirst of all\b(?!,)/g, 'First of all,')
        .replace(/\bSecondly\b(?!,)/g, 'Secondly,')
        .replace(/\bNext\b(?!,)/g, 'Next,')
        .replace(/\bBesides\b(?!,)/g, 'Besides,')
        .replace(/\bMoreover\b(?!,)/g, 'Moreover,')
        .replace(/\bIn short\b(?!,)/g, 'In short,')
        .replace(/\bTo sum up\b(?!,)/g, 'To sum up,')
        .replace(/\bIn conclusion\b(?!,)/g, 'In conclusion,')
        .replace(/\s+/g, ' ')
        .trim();
}
window._speechKeepAlive = null;
window.speakText = function(text, triggerBtn = null) {
    if (!('speechSynthesis' in window)) {
        showToast('Trình duyệt không hỗ trợ phát âm.');
        return;
    }

    if (!state.audioEnabled) {
        state.audioEnabled = true;
        const audioToggle = document.getElementById('audio-toggle');
        if (audioToggle) audioToggle.classList.add('active');
    }

    stopAllAudio();

    const clean = cleanSpokenText(text);
    if (!clean) return;

    // Visual button feedback
    if (triggerBtn) {
        triggerBtn.classList.add('btn-speaking-active');
    }

    const speedSelect = document.getElementById('speed-select');
    const speedRate = speedSelect ? (parseFloat(speedSelect.value) || 1.0) : 1.0;

    try {
        if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
        }
        window.speechSynthesis.cancel();

        const utt = new SpeechSynthesisUtterance(clean);
        activeUtterance = utt;
        const voices = window.speechSynthesis.getVoices() || [];

        let bestVoice = null;
        if (state.selectedVoiceURI) {
            bestVoice = voices.find(v => v.voiceURI === state.selectedVoiceURI);
        }
        if (!bestVoice) {
            const preferredNames = [
                "Microsoft Guy",
                "Google UK English Male",
                "Google US English Male",
                "Alex",
                "Daniel",
                "Google US English",
                "Samantha"
            ];
            for (let name of preferredNames) {
                bestVoice = voices.find(v => v.name && v.name.includes(name));
                if (bestVoice) break;
            }
            if (!bestVoice) {
                bestVoice = voices.find(v => v.lang && (v.lang.startsWith("en-US") || v.lang.startsWith("en-GB")) && v.name && v.name.includes("Male"));
            }
            if (!bestVoice) {
                bestVoice = voices.find(v => v.lang && (v.lang.startsWith("en-US") || v.lang.startsWith("en-GB")));
            }
            if (!bestVoice) {
                bestVoice = getBestNaturalVoice(voices);
            }
            if (!bestVoice) {
                bestVoice = voices[0];
            }
        }

        if (bestVoice) {
            utt.voice = bestVoice;
            utt.lang = bestVoice.lang;
        } else {
            utt.lang = 'en-US';
        }

        utt.rate = speedRate; // Tốc độ chuẩn 1.0 (chuẩn SPEAKING PART 01)
        utt.pitch = 1.25; // Cao độ sáng, trẻ trung, năng động gốc trên máy tính chuẩn SPEAKING PART 01

        const cleanup = () => {
            if (window._speechKeepAlive) {
                clearInterval(window._speechKeepAlive);
                window._speechKeepAlive = null;
            }
            activeUtterance = null;
            if (triggerBtn) triggerBtn.classList.remove('btn-speaking-active');
            document.querySelectorAll('.btn-speaking-active').forEach(b => b.classList.remove('btn-speaking-active'));
        };

        utt.onend = cleanup;
        utt.onerror = (e) => {
            console.warn('Speech utterance ended or interrupted:', e);
            cleanup();
        };

        // Giữ kết nối âm thanh liên tục trên Chrome / Safari khi đọc bài dài
        if (window._speechKeepAlive) clearInterval(window._speechKeepAlive);
        window._speechKeepAlive = setInterval(() => {
            if (!window.speechSynthesis || !window.speechSynthesis.speaking) {
                clearInterval(window._speechKeepAlive);
                window._speechKeepAlive = null;
            } else {
                window.speechSynthesis.pause();
                window.speechSynthesis.resume();
            }
        }, 10000);

        setTimeout(() => {
            window.speechSynthesis.speak(utt);
            if (window.speechSynthesis.paused) window.speechSynthesis.resume();
        }, 10);

    } catch (e) {
        console.error("Speech synthesis exception:", e);
        if (triggerBtn) triggerBtn.classList.remove('btn-speaking-active');
    }
};

window.copyText = function(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Đã sao chép vào bộ nhớ tạm! 📋');
    }).catch(() => {
        showToast('Không thể sao chép');
    });
};

function playBeep(freq = 440, duration = 0.15) {
    try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        if (!window._audioCtx) {
            window._audioCtx = new AudioContextClass();
        }
        if (window._audioCtx.state === 'suspended') {
            window._audioCtx.resume();
        }
        const ctx = window._audioCtx;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration);
    } catch (e) {
        console.log('AudioContext notice:', e);
    }
}

/* ==========================================================================
   4. INTERACTIVE ANSWER BUILDER
   ========================================================================== */
const situationTemplates = {
    gift: {
        intro: "Well, if {SUB_SUBJ} had to choose a gift for {TARGET}, {SUB_SUBJ} would go for {CHOSEN}.",
        r1: "Firstly, it's a suitable gift because {REASON_1}.",
        r2: "Secondly, it's a practical and meaningful present because {REASON_2}.",
        reject1: "{SUB_SUBJ} wouldn't choose {REJ_1} because {REJ_REASON_1}.",
        reject2: "As for {REJ_2}, it's less suitable because {REJ_REASON_2}.",
        concl: "In short, {SUB_SUBJ} believe {CHOSEN} is the best choice for this situation."
    },
    activity: {
        intro: "Well, if {SUB_SUBJ} had to choose an activity to {TARGET}, {SUB_SUBJ} would go for {CHOSEN}.",
        r1: "First of all, {CHOSEN} is a wonderful choice because {REASON_1}.",
        r2: "Secondly, it’s very beneficial because {REASON_2}.",
        reject1: "{SUB_SUBJ} wouldn't recommend {REJ_1} because {REJ_REASON_1}.",
        reject2: "As for {REJ_2}, it's not the ideal choice because {REJ_REASON_2}.",
        concl: "In short, {SUB_SUBJ} believe {CHOSEN} is the most suitable activity."
    },
    location: {
        intro: "Well, if {SUB_SUBJ} had to select a place for {TARGET}, {SUB_SUBJ} would definitely go for {CHOSEN}.",
        r1: "First of all, {CHOSEN} has a convenient location and great atmosphere because {REASON_1}.",
        r2: "Moreover, it offers reasonable costs and facilities because {REASON_2}.",
        reject1: "{SUB_SUBJ} wouldn't choose {REJ_1} because {REJ_REASON_1}.",
        reject2: "As for {REJ_2}, it's less suitable because {REJ_REASON_2}.",
        concl: "To sum up, {CHOSEN} is clearly the best option for everyone."
    },
    transport: {
        intro: "Well, if {SUB_SUBJ} had to choose a means of transport to {TARGET}, {SUB_SUBJ} would go for {CHOSEN}.",
        r1: "Firstly, it's convenient, safe, and flexible because {REASON_1}.",
        r2: "Secondly, it helps {SUB_OBJ} save time and money because {REASON_2}.",
        reject1: "{SUB_SUBJ} wouldn't select {REJ_1} because {REJ_REASON_1}.",
        reject2: "As for {REJ_2}, it's not practical because {REJ_REASON_2}.",
        concl: "In conclusion, {CHOSEN} is the most suitable vehicle for this trip."
    },
    solution: {
        intro: "Well, if {SUB_SUBJ} had to suggest a solution to {TARGET}, {SUB_SUBJ} would strongly recommend {CHOSEN}.",
        r1: "First and foremost, it’s an effective and long-term solution because {REASON_1}.",
        r2: "Furthermore, it’s practical and easy to apply because {REASON_2}.",
        reject1: "{SUB_SUBJ} wouldn't advise choosing {REJ_1} because {REJ_REASON_1}.",
        reject2: "As for {REJ_2}, it's less effective because {REJ_REASON_2}.",
        concl: "In short, {CHOSEN} is the most optimal way to handle this issue."
    },
    job: {
        intro: "Well, if {SUB_SUBJ} had to choose a job for {TARGET}, {SUB_SUBJ} would go for {CHOSEN}.",
        r1: "First of all, it offers great career opportunities and stability because {REASON_1}.",
        r2: "Secondly, it helps develop valuable skills and experience because {REASON_2}.",
        reject1: "{SUB_SUBJ} wouldn't choose {REJ_1} because {REJ_REASON_1}.",
        reject2: "As for {REJ_2}, it's not very suitable because {REJ_REASON_2}.",
        concl: "In short, {SUB_SUBJ} believe {CHOSEN} is the best career path."
    }
};

const samplePresetOptions = {
    gift: {
        target: "our foreign teacher before he leaves Vietnam",
        chosen: "a Vietnamese coffee package",
        r1: "he loves Vietnamese traditional drinks and it represents local culture",
        r2: "it’s compact, easy to carry, and has a very reasonable price",
        rej1: "a lotus picture",
        rejR1: "he cannot use it in daily life and it’s quite fragile to pack",
        rej2: "a hand-made gift",
        rejR2: "we don't have enough time to prepare it properly"
    },
    activity: {
        target: "spend our upcoming weekend together",
        chosen: "going to the countryside",
        r1: "it allows us to enjoy the fresh air and escape the noisy city life",
        r2: "it helps our family spend quality time together and strengthen our bond",
        rej1: "going to the cinema",
        rejR1: "it’s quite passive and we cannot talk to each other inside the theater",
        rej2: "going shopping",
        rejR2: "it’s very crowded and quite expensive for a weekend trip"
    },
    location: {
        target: "organize our class year-end party",
        chosen: "a cozy restaurant in the city center",
        r1: "it has delicious food, spacious seating, and friendly service",
        r2: "it’s located in a convenient area so everyone can easily travel there",
        rej1: "holding the party at home",
        rejR1: "our space is too small and cleaning up afterwards takes a lot of time",
        rej2: "a picnic in the park",
        rejR2: "the weather can be unpredictable and there are not enough facilities"
    },
    transport: {
        target: "travel from Hanoi to Da Nang for our summer vacation",
        chosen: "traveling by plane",
        r1: "it’s very fast and saves a lot of travel time",
        r2: "it’s safe, comfortable, and we can enjoy a relaxing flight",
        rej1: "traveling by motorbike",
        rejR1: "the distance is too long and it’s very dangerous on the highway",
        rej2: "traveling by coach",
        rejR2: "it takes over 15 hours and easily causes travel sickness and fatigue"
    },
    solution: {
        target: "improve English speaking fluency effectively",
        chosen: "joining an English speaking club twice a week",
        r1: "it creates a natural environment to practice speaking with friendly peers",
        r2: "it helps build confidence and overcome the fear of making mistakes",
        rej1: "only studying grammar books at home",
        rejR1: "it focuses too much on theory without real conversation practice",
        rej2: "hiring an expensive private tutor",
        rejR2: "it’s not affordable for students with a limited monthly budget"
    },
    job: {
        target: "my career after university graduation",
        chosen: "working as an English teacher at a language center",
        r1: "it matches my passion for education and helps develop communication skills",
        r2: "it provides a dynamic working environment and good career growth",
        rej1: "doing an office administrative job",
        rejR1: "it’s repetitive, boring, and does not suit my active personality",
        rej2: "starting a personal business immediately",
        rejR2: "it’s extremely risky and requires significant capital and experience"
    }
};

function initAnswerBuilder() {
    const groupSelect = document.getElementById('b-group');
    const pronounSelect = document.getElementById('b-pronoun');
    const targetInput = document.getElementById('b-target');
    const chosenInput = document.getElementById('b-chosen');
    const r1Input = document.getElementById('b-r1');
    const r2Input = document.getElementById('b-r2');
    const rej1Input = document.getElementById('b-rej1');
    const rejR1Input = document.getElementById('b-rejr1');
    const rej2Input = document.getElementById('b-rej2');
    const rejR2Input = document.getElementById('b-rejr2');
    const generateBtn = document.getElementById('b-generate-btn');
    const resultBox = document.getElementById('b-result-text');
    const presetBtn = document.getElementById('b-preset-btn');
    const listenBtn = document.getElementById('b-listen-btn');
    const copyBtn = document.getElementById('b-copy-btn');

    if (!groupSelect) return;

    function loadPreset(groupKey) {
        const p = samplePresetOptions[groupKey] || samplePresetOptions.gift;
        targetInput.value = p.target;
        chosenInput.value = p.chosen;
        r1Input.value = p.r1;
        r2Input.value = p.r2;
        rej1Input.value = p.rej1;
        rejR1Input.value = p.rejR1;
        rej2Input.value = p.rej2;
        rejR2Input.value = p.rejR2;
    }

    groupSelect.addEventListener('change', () => {
        loadPreset(groupSelect.value);
    });

    if (presetBtn) {
        presetBtn.addEventListener('click', () => {
            loadPreset(groupSelect.value);
            showToast('Đã nạp dữ liệu mẫu thành công! 📝');
        });
    }

    generateBtn.addEventListener('click', () => {
        const group = groupSelect.value;
        const pronoun = pronounSelect.value;
        const target = targetInput.value.trim() || 'this situation';
        const chosen = chosenInput.value.trim() || 'this option';
        const r1 = r1Input.value.trim() || 'it brings great benefits';
        const r2 = r2Input.value.trim() || 'it’s very practical and convenient';
        const rej1 = rej1Input.value.trim() || 'the second choice';
        const rejR1 = rejR1Input.value.trim() || 'it takes too much time';
        const rej2 = rej2Input.value.trim() || 'the third choice';
        const rejR2 = rejR2Input.value.trim() || 'it’s quite expensive';

        let subSubject = pronoun;
        let subObject = pronoun === 'I' ? 'me' : pronoun === 'we' ? 'us' : pronoun === 'he' ? 'him' : pronoun === 'she' ? 'her' : 'them';
        let subPoss = pronoun === 'I' ? 'my' : pronoun === 'we' ? 'our' : pronoun === 'he' ? 'his' : pronoun === 'she' ? 'her' : 'their';

        const tpl = situationTemplates[group] || situationTemplates.gift;

        let intro = tpl.intro.replace(/{SUB_SUBJ}/g, subSubject).replace(/{TARGET}/g, target).replace(/{CHOSEN}/g, chosen);
        let reason1 = tpl.r1.replace(/{SUB_SUBJ}/g, subSubject).replace(/{SUB_OBJ}/g, subObject).replace(/{CHOSEN}/g, chosen).replace(/{REASON_1}/g, r1);
        let reason2 = tpl.r2.replace(/{SUB_SUBJ}/g, subSubject).replace(/{SUB_OBJ}/g, subObject).replace(/{CHOSEN}/g, chosen).replace(/{REASON_2}/g, r2);
        let reject1 = tpl.reject1.replace(/{SUB_SUBJ}/g, subSubject).replace(/{REJ_1}/g, rej1).replace(/{REJ_REASON_1}/g, rejR1);
        let reject2 = tpl.reject2.replace(/{SUB_SUBJ}/g, subSubject).replace(/{REJ_2}/g, rej2).replace(/{REJ_REASON_2}/g, rejR2);
        let concl = tpl.concl.replace(/{SUB_SUBJ}/g, subSubject).replace(/{CHOSEN}/g, chosen);

        const fullSpeech = `${intro}\n\n${reason1} ${reason2}\n\n${reject1} ${reject2}\n\n${concl}`;
        resultBox.textContent = fullSpeech;
        showToast('Đã tạo bài nói hoàn chỉnh! 🎉');
    });

    listenBtn.addEventListener('click', () => {
        const text = resultBox.textContent;
        if (text) {
            speakText(text);
        }
    });

    copyBtn.addEventListener('click', () => {
        const text = resultBox.textContent;
        if (text) {
            copyText(text);
        }
    });

    loadPreset('gift');
}

/* ==========================================================================
   5. VSTEP PRACTICE TIMER (1' Prep + 3' Speak)
   ========================================================================== */

// ==========================================================================
// ALL 98 PRACTICE SITUATIONS POOL
// ==========================================================================
const ALL_SITUATIONS_POOL = ["SITUATION 01: Your foreign teacher is going to leave Vietnam. Your class wants to choose a gift for him. There are three options: a lotus picture, a Vietnamese coffee package, and a hand-made gift. Which one is the best choice?", "SITUATION 02: Your class wants to choose a gift for your teacher. There are three choices: a handbag, shoes, and glasses. Which one would you choose?", "SITUATION 03: Your friend’s birthday is coming up, and you want to buy him a special gift. You have three options to choose from: a watch, a pair of headphones, or a picture frame. Which one would you choose, and why?", "SITUATION 04: You want to choose a gift for your colleague who is retiring next week Three gifts are considered: a handmade gift, a movie ticket, or a book. Which one do you choose?", "SITUATION 05: Your friend is going to do military service. You are thinking about a gift for him. There are three options: a game, a book, and a diary. Which one would you choose?", "SITUATION 06: Your nephew will visit your hometown. You are going to give him a gift. There are three options: a robot, an English comic book, or a school bag. Which one do you think is the best choice?", "SITUATION 07: Your friend had an accident and he has to stay in the hospital for a week. You are thinking about a gift for him. There are three options: flowers, a set of crayons and a drawing book, or some healthy snacks. Which one will you choose?", "SITUATION 08: Your cousin has just ranked first in his class. His parents want to give him a special gift. They’re considering three options: buying him a laptop, giving him a trip, or buying him a motorbike. Which one would you suggest?", "SITUATION 09: Your nephew has just turned 13, and you want to give him a special gift. You are considering three options: a guitar, an MP3 player, or a set of comic books. Which one would you choose?", "SITUATION 10: Your niece is turning twelve years old next week. You are thinking about what to give her. There are three options: a dress, an English book, and a bunch of flowers. Which one is the best choice?", "SITUATION 11: Your friend, who is a musician, is having his first song published next month. You want to buy him a gift to celebrate this special occasion. There are three choices: a bouquet of flowers, a handmade card, and a notebook.", "SITUATION 12: You are going to choose a birthday gift for your father. There are three choices: a tie, a bottle of champagne, and a puppy. Which one would you choose?", "SITUATION 13: Vietnamese Teachers' Day is coming, and your class wants to give your teacher a special gift. You are considering three options: organizing a small party, making a thank-you video, and giving a handmade card. Which is the best choice?", "SITUATION 14: You are choosing a gift for your foreign friend to represent Vietnamese culture. You have three options: some lotus flowers, an Ao Dai, or a conical hat. Which one would you choose?", "SITUATION 01: You are planning a weekend vacation. There are three options: going to the beach, visiting the mountains, and exploring a city with museums and cafés. Which one is the best choice for you?", "SITUATION 02: You have some free time in the evening and want to do something to relax. Three activities are considered: reading a book, watching TV, and going for a walk. Which one would you choose?", "SITUATION 03: You are thinking about how to spend your weekend. There are three options: going out with your family, hanging out with friends, and relaxing alone at home. Which one is the best choice?", "SITUATION 04: Your friend is coming to visit your house next week. You are thinking of a cosy dinner with your friend. Three options are: cooking at home, ordering food from a restaurant, and eating out at a restaurant. Which option would you choose?", "SITUATION 05: You are considering what to do during a 15-minute break. There are three options: reading a book, talking with friends, and doing exercise. Which one is the best choice for you?", "SITUATION 06: You have two days off and want to make the most of your time. Three activities are considered: staying at home, traveling abroad, and hiking with your friends. Which one would you choose?", "SITUATION 07: Your friend wants to learn a new skill after work, but she doesn't have much free time. She is considering three options: painting, gardening, and knitting. Which one would you choose?", "SITUATION 08: Your friend feels very stressed with study and wants to do something. Which one would you recommend her: taking a sport, learning new soft skills, and doing volunteer work?", "SITUATION 09: Your friend wants to do something new to relax. There are three options: making a cake, going to a painting workshop, or learning a new language. Which one do you think is the best choice?", "SITUATION 10: Your sister lost her confidence. You are thinking about a way she can gain confidence. There are three choices: joining a summer camp, doing volunteer work, and joining a speaking contest. Which one would you recommend?", "SITUATION 11: Your family is discussing where your 7th-grade nephew will spend his summer holiday: joining a camp, doing military training, or staying with his grandparents in the countryside. Which one is the best choice for him?", "SITUATION 12: You are going to have three days off. You are planning to do something to relax. There are three options: going to the beach, going hiking, and going to a big city. Which one will you choose?", "SITUATION 13: You want to celebrate your birthday in a special way this year. You are considering three options: having a small party at home, going on a short trip with close friends, or spending the day volunteering. Which one would you choose?", "SITUATION 14: You and your friends are planning a short holiday in Vietnam. You are considering three options: visiting Can Tho to explore the floating markets, going to Vung Tau for a beach trip, or hiking in Da Lat. Which place would you choose?", "SITUATION 01: Your English friend is visiting Vietnam on his summer vacation. Three places are considered: a mountainous town, a coastal city, and an ancient town. Which one would you recommend?", "SITUATION 02: You are going to have a short trip with your family. You are considering three choices: a water park, a museum, and an eco-tourism site. Which one would you choose?", "SITUATION 03: Your class is planning to hold a reunion party. Three places are suggested: a restaurant, a coffee shop, or your teacher’s house. Which one would you choose?", "SITUATION 04: Your neighbor wants to spend more quality time with her 11-year-old son. She is considering three places to take him: a park, a science center, or the beach.\nWhich place would you recommend?", "SITUATION 05: A foreign friend is going to visit Vietnam in August for 3 days. Three places are suggested: Hanoi, Ho Chi Minh City, or Hue. Which one would you recommned?", "SITUATION 06: You are going to take an exam. You are thinking of a place to study for exams. There are three choices: in your bedroom, in the school library, and in the coffee shop. Which one would you choose?", "SITUATION 07: Your foreign friend has come to Vietnam. You are thinking of a place to suggest him to travel. Which option is the best choice: Đà Nẵng, Hồ Chí Minh, and Hà Nội?", "SITUATION 08: Your class wants to hold a farewell party to say goodbye to your English teacher. Your class is considering where to hold it: in the classroom, in the teacher’s house, and in a restaurant. Which one is the best choice?", "SITUATION 09: Your cousin is going to be a freshman at the university. He is thinking about where to live. There are three choices: living in a dormitory, living with his friends, or living with his relatives. Which one is the best choice for him?", "SITUATION 10: A student from Đà Nẵng plans to visit Hà Nội this weekend. Three places are suggested for sightseeing: Hồ Chí Minh Mausoleum, Hoàn Kiếm Lake, or Hà Nội Museum. Which place would you recommend?", "SITUATION 11: Your company is planning a two-day conference for employees. There are three suggested places: at a hotel, at a conference centre, at your company. Which option do you think is the best choice?", "SITUATION 12: You and your friend are choosing a place to eat out together this weekend. There are three options: a Thai restaurant, a Japanese restaurant, and a Chinese restaurant. Which one would you choose?", "SITUATION 13: You and your colleagues want to relax after a long working day. There are three options: going to a quiet café, going to a shopping mall, or going to a public park. Which place would you choose?", "SITUATION 14: Your friend is planning to study abroad and is choosing between three countries. The options are: Singapore, Australia, and Japan. Which one would you recommend?", "SITUATION 01: Your workplace is about 10 km from your house. You are considering which means of transport to choose: car, bus, and motorbike. Which one would you choose?", "SITUATION 02: A group of students is going to travel from Ho Chi Minh City to Hue. Three means of transport are suggested: by train, by plane, or by coach. Which one will you suggest?", "SITUATION 03: Your friend is planning a weekend trip to a nearby beach, about 150 km away. They are considering going by motorbike, by car, or by bus. Which one do you think is the best option?", "SITUATION 04: You and your classmates will attend a 3-day camping trip in a remote area. You need to choose among riding bicycles, hiring a coach, or using motorbikes. Which option would you recommend?", "SITUATION 05: A tourist wants to explore the city center of Hanoi. The three suggested modes of transport are walking, renting a bicycle, or taking a taxi. Which do you think is the most suitable?", "SITUATION 06: Our company is organizing a team-building event in a city 400 km away. You need to decide between traveling by plane, by overnight train, or by company car. Which one would you choose and why?", "SITUATION 01: Your friend is looking for a new job. He is considering three options: a graphic designer, an IT support specialist, or a content creator for social media. Which job would you recommend he choose?", "SITUATION 02: Your brother is going to graduate from university. He is thinking about finding a job. There are three choices: a teacher, a translator, and a tour guide. Which one would you recommend?", "SITUATION 03: Your friend wants to find a part-time job to improve his English. He is considering three options: a job at a restaurant, a job at an English center, and a job at a travel agency. Which one do you think is the best choice?", "SITUATION 04: Your friend has just graduated and is looking for a teaching job. There are three options: teaching in a rural school, teaching in a big city school, or teaching in an international school. Which one is most suitable for him?", "SITUATION 05: Your cousin is passionate about art and creativity. She is thinking of pursuing a career. Three options are considered: a graphic designer, an interior decorator, and a fashion designer. Which one would you recommend?", "SITUATION 06: Your close friend wants to choose a job that offers a good work-life balance. He is considering working in an office, becoming a freelancer, or running a small business. Which option do you think is the most suitable?", "SITUATION 07: Your younger sister wants a stable and well-paid job after graduation. She is considering three options: working for the government, working for a foreign company, or starting her own business. Which one would you suggest?", "SITUATION 01: Your 15-year-old younger brother wants to improve his English communication skills. There are three ways to choose: studying at an English center, talking with foreigners to practice speaking, and joining an English-speaking club. Which one is the best choice?", "SITUATION 02: Your friend spends too much time on social media and wants to stop. She is thinking of: deleting the apps, limiting screen time, or doing more outdoor activities. Which one would you suggest?", "SITUATION 03: Your younger sister is under pressure because of exams. You are thinking of three solutions: giving her advice, taking her out for a walk, or encouraging her to take a break. Which one would you choose?", "SITUATION 04: Your friend is very stressed due to too much schoolwork. She is considering three options: doing exercise, talking to a friend, or taking a rest. Which one would you recommend?", "SITUATION 05: Your cousin is bullied at school. There are three solutions: talk to teachers, talk to his parents, and talk to his friends. Which one is the best choice?", "SITUATION 06: Your brother is in love with a girl in his high school. What will you do: ask him to stop, let him continue under your control, and talk to parents?", "SITUATION 07: Your sister has told lies about many things, and she continues doing this without changing. You are thinking about what to do: talk to her, talk to parents, or let her continue?", "SITUATION 08: You have a headache. You are thinking about what to do. Three options are: doing yoga, taking medicine, or visiting the doctor. Which is the best choice?", "SITUATION 09: You are the director of your local hospital. You wish to improve the overall quality of the hospital. Three options are considered: investing in medical equipment to enhance treatment quality, collecting feedback from patients to improve services, and expanding hospital facilities to reduce overcrowding. What would you do to achieve that goal?", "SITUATION 10: Your uncle, who is 45 years old, would like to stay healthy. There are three options to choose: become a vegetarian, work out at the gym, or do exercise. Which one do you think is the best choice?", "SITUATION 11: Your sister wants to lose weight. There are three options to choose: going to the gym, going on a diet, and taking weight-loss medicine. Which one would you recommend her?", "SITUATION 12: Your school is trying to reduce the amount of plastic waste. Three solutions are suggested: encouraging students to bring reusable bottles, organizing a “no plastic day” every week, or putting up educational posters around the campus. Which one do you think is the most effective solution?", "SITUATION 13: Your friend is not good at foreign languages and wants to improve his English. Three options are: taking an English course, talking with friends at home, or joining an English-speaking club. Which one would you recommend?", "SITUATION 14: A group of your foreign students wants to learn Vietnamese history. Three activities are considered: visiting a museum, watching documentaries, and reading history books. Which one do you think is the best choice?", "SITUATION 01: Your younger sister has just finished high school and is planning to study at a university. She wants to choose a university that provides high-quality education. There are three factors she should consider: the university’s ranking, the distance from her home, and the tuition fees. Which one do you think is the best choice for her?", "SITUATION 02: Your cousin has just graduated from high school and is going to enter university. He is considering several factors before choosing a school. Three important things to think about are: affordable fees, student support, and campus facilities. Which one do you think is the best choice for him?", "SITUATION 03: As an employer, you want to hire a new employee for your company. There are three qualities you should consider: communication skills, honesty, and professional skills. Which one is the most important quality for you?", "SITUATION 04: Your brother is starting university next month, and your family is trying to decide which university would be the best fit for him. Three key factors are considered: the university’s ranking, its distance from home, and the course fees. In your opinion, which factor is the most important?", "SITUATION 05: Your nephew has just graduated from high school and is going to enter university. He is considering several factors before choosing a school. Three important things to think about are: tuition fees and living costs, facilities such as libraries and labs, or having supportive friends or classmates. Which one is the best choice?", "SITUATION 06: Your family wants to buy a new house. There are three factors to consider: its size, its cost, and its location. Which one do you think is the best choice?", "SITUATION 07: You are going to graduate from university next month. You are thinking of finding a suitable job for yourself. Three things are considered: salary, location, and job promotion. Which one would you consider when choosing a job?", "SITUATION 08: You are planning to change your job. There are three important factors to consider when making your decision: better career prospects, a higher salary, and a more flexible job. Which one would you choose?", "SITUATION 09: Your school wants to improve the quality of education. There are three areas it can focus on: teachers, students, or facilities. Which one do you think is the most important?", "SITUATION 10: As a company manager seeking to recruit new employees, you must evaluate three factors: honesty, communication skills, and professional skills. In your opinion, which factor is the most important?", "SITUATION 01: Teachers at a high school are considering how to assess students. Three choices are suggested: teacher assessment, self-assessment, and peer assessment. Which one is the best choice?", "SITUATION 02: Your company is considering three promotional methods: offering discounts, distributing free samples, and organizing lucky draws. Which method do you think is the best choice?", "SITUATION 03: Your club wants to raise funds for a local charity project. You can choose one activity: organizing a charity run, hosting a bake sale, or holding an art auction. Which one would you recommend?", "SITUATION 04: Your group is tasked with conducting a customer satisfaction survey. Three formats are considered: face-to-face interviews, online questionnaires, and telephone surveys. Which format would you choose?", "SITUATION 05: Your school wants to promote a new environmental campaign. Three advertising channels are suggested: social media, printed flyers, and school banners. Which channel is the most effective?", "SITUATION 06: You are preparing a presentation on a new product. There are three options for you to choose to present the product: a PowerPoint slide, a poster, and a video. Which is the best choice?", "SITUATION 01: Your school is about to conduct a survey to find out students’ opinions on issues that have a heavy impact on the community. Three actions are considered: smoking in restaurants, using mobile phones while driving, and making noise in public places. Which one do you think has the heaviest impact on the community?", "SITUATION 02: Your co-worker wants to learn to play the guitar. There are three possible options: using a tutorial app, taking part in a private course, or learning from a friend who plays guitar well. Which one do you think is the best choice?", "SITUATION 03: Your school is organizing a presentation about your country. You can choose one topic to talk about: cultural events, historical achievements, or economic achievements. Which one would you choose?", "SITUATION 04: Your foreign friend wants to learn more about Vietnamese culture during her short trip. She can choose between visiting a traditional village, attending a local festival, or exploring a national museum. Which place would you recommend?", "SITUATION 05: You and your friends are going to celebrate a special occasion together. You are considering three types of meals: a barbecue, a buffet, or a sit-down dinner at a restaurant. Which one would you choose?", "SITUATION 06: Your school is organizing a science event, and students are encouraged to contribute in some way. You are considering three options: donating science books, inviting a scientist to give a talk, or organizing a science-themed game. Which one would you choose?", "SITUATION 07: You are going to study abroad for a short period of time. You want to take a course to improve yourself. You are considering three options: a computer course, a public speaking course, and a time management course. What do you choose?", "SITUATION 08: Your school is going to organize a year-end party for students. You are asked to take part in the preparation. You are considering three options: decorating the event area, being in charge of organizing the event, and inviting special guests. Which place would you choose?", "SITUATION 09: Your local authority is planning to improve traffic safety in your city. You are asked to choose the most effective solution among the following: raising public awareness of traffic laws, increasing the legal driving age, and placing more traffic signs around the city. Which one is the best choice?", "SITUATION 10: You are going to organize a workshop for students who are looking for internships. You are considering three main topics to include in your workshop: how to improve workplace skills, how to prepare well for job interviews, or how to write an impressive CV/resumé. Which one is the best choice?", "SITUATION 11: Your younger brother has just graduated from high school and is unsure about what to do next. You are considering three options to suggest to him: finding a job, continuing his studies, or doing volunteer work. Which one would you recommend?", "SITUATION 12: One day, you receive a large amount of money transferred to your bank account by mistake. You don’t know who sent it. You are considering three options: keeping silent and doing nothing, informing your bank about the transfer, and reporting the case to the police. Which one would you choose?", "SITUATION 13: Your friend wants to read something new to expand her knowledge and explore the world in a different way. You are considering three book options to recommend to her: a mystery novel, a romance novel, and a science fiction book. Which one would you choose?"];

// Format options helper in JS
function formatExamPromptOptions(prompt) {
    let m = prompt.match(/(:\s*)([^:,?]+?),\s*([^:,?]+?),\s*(?:(and|or)\s+|(both\s+))?([^:,?]+?)(\.|\?|\n|$)/);
    if (m) {
        let prefix = m[1];
        let opt1 = m[2].trim();
        let opt2 = m[3].trim();
        let conj = m[4] || "";
        let both = m[5] || "";
        let opt3 = m[6].trim();
        let end_punct = m[7];

        let last_part = conj ? (conj + " <strong><em>" + opt3 + "</em></strong>") :
                       (both ? ("<strong><em>" + both + opt3 + "</em></strong>") : ("<strong><em>" + opt3 + "</em></strong>"));
        let formatted = prefix + "<strong><em>" + opt1 + "</em></strong>, <strong><em>" + opt2 + "</em></strong>, " + last_part + end_punct;
        return prompt.slice(0, m.index) + formatted + prompt.slice(m.index + m[0].length);
    }

    let m2 = prompt.match(/((?:suggested modes of transport are|choose among|decide between|choose between|considering)\s+)([^.,?]+?),\s*([^.,?]+?),\s*(?:(and|or)\s+)?([^.,?]+?)(\.|\?|\n|$)/i);
    if (m2) {
        let prefix = m2[1];
        let opt1 = m2[2].trim();
        let opt2 = m2[3].trim();
        let conj = m2[4] || (prompt.includes(" or ") ? "or" : "and");
        let opt3 = m2[5].trim();
        let end_punct = m2[6];

        let formatted = prefix + "<strong><em>" + opt1 + "</em></strong>, <strong><em>" + opt2 + "</em></strong>, " + conj + " <strong><em>" + opt3 + "</em></strong>" + end_punct;
        return prompt.slice(0, m2.index) + formatted + prompt.slice(m2.index + m2[0].length);
    }

    return prompt;
}

// Global function to launch exam with any situation
window.startExamWithPrompt = function(promptText) {
    if (window.resetExamTimer) {
        window.resetExamTimer();
    }
    const promptDisplay = document.getElementById('exam-prompt-content');
    if (promptDisplay) {
        let cleanPrompt = promptText.trim();
        if (cleanPrompt.includes(':')) {
            let parts = cleanPrompt.split(':');
            cleanPrompt = parts.slice(1).join(':').trim();
        }
        promptDisplay.innerHTML = formatExamPromptOptions(cleanPrompt);
    }

    const timerNavItem = document.querySelector('.nav-item[data-target="tool-timer"]');
    if (timerNavItem) {
        timerNavItem.click();
    } else {
        const pane = document.getElementById('tool-timer');
        if (pane) {
            document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
            pane.classList.add('active');
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            const topTitle = document.getElementById('top-title');
            if (topTitle) topTitle.textContent = 'PHÒNG THI THỬ & GHI ÂM VSTEP';
        }
    }

    const timerSection = document.getElementById('tool-timer');
    if (timerSection) {
        timerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    
    const transContent = document.getElementById('exam-translation-content');
    if (transContent) {
        let cleanRaw = promptText.replace(/<[^>]+>/g, '').trim();
        if (cleanRaw.includes(':')) {
            cleanRaw = cleanRaw.split(':').slice(1).join(':').trim();
        }
        let foundTrans = PROMPT_TRANSLATIONS_MAP[cleanRaw] || PROMPT_TRANSLATIONS_MAP[promptText.trim()];
        if (!foundTrans) {
            const normSearch = cleanRaw.toLowerCase().replace(/[^a-z0-9]/g, '');
            const cards = document.querySelectorAll('.practice-situation-card, .prompt-banner-box, .sample-spotlight');
            for (const c of cards) {
                const pEl = c.querySelector('.sit-prompt-text, .prompt-banner');
                if (pEl) {
                    const normCard = pEl.textContent.toLowerCase().replace(/[^a-z0-9]/g, '');
                    if ((normSearch.length >= 20 && normCard.includes(normSearch.slice(0, 25))) || (normCard.length >= 20 && normSearch.includes(normCard.slice(0, 25)))) {
                        const tEl = c.querySelector('.trans-text, .sit-translation-box');
                        if (tEl) {
                            foundTrans = tEl.innerHTML.trim();
                            PROMPT_TRANSLATIONS_MAP[cleanRaw] = foundTrans;
                            break;
                        }
                    }
                }
            }
        }
        transContent.innerHTML = foundTrans || "Bản dịch đang được cập nhật...";
    }
    const examTransBox = document.getElementById('exam-translation-box');
    const examTransBtn = document.getElementById('exam-toggle-trans-btn');
    if (examTransBox) examTransBox.classList.add('hidden');
    if (examTransBtn) {
        examTransBtn.innerHTML = '<i class="fa-solid fa-language"></i> Dịch đề thi';
        examTransBtn.style.color = '';
        examTransBtn.style.background = '';
    }

    showToast('Đã nạp đề vào Phòng Thi Thử! Bấm "Bắt đầu làm bài" khi sẵn sàng 🎙️');
};

// ==========================================================================
// VSTEP EXAM SIMULATOR & VOICE RECORDER LOGIC
// ==========================================================================
let mediaRecorder = null;
let audioChunks = [];
let audioStream = null;
let recognition = null;
let currentAudioBlobUrl = null;

function initExamTimerAndRecorder() {
    const timerDisplay = document.getElementById('timer-display');
    const phaseBadge = document.getElementById('timer-phase-badge');
    const statusHint = document.getElementById('exam-status-hint');
    const startBtn = document.getElementById('timer-start-btn');
    const pauseBtn = document.getElementById('timer-pause-btn');
    const skipBtn = document.getElementById('timer-skip-btn');
    const finishBtn = document.getElementById('timer-finish-btn');
    const resetBtn = document.getElementById('timer-reset-btn');
    const progressCircle = document.getElementById('timer-progress-circle');
    const micVisualizer = document.getElementById('mic-visualizer');
    
    const listenPromptBtn = document.getElementById('exam-listen-prompt-btn');
    const randomPromptBtn = document.getElementById('exam-random-prompt-btn');
    const examTransBtn = document.getElementById('exam-toggle-trans-btn');
    const examTransBox = document.getElementById('exam-translation-box');
    const clearNotesBtn = document.getElementById('clear-notes-btn');
    const scratchpad = document.getElementById('exam-scratchpad');
    
    const liveTranscript = document.getElementById('exam-live-transcript');
    const wordCounterBadge = document.getElementById('word-counter-badge');
    
    const playbackBox = document.getElementById('exam-playback-box');
    const recordedPlayer = document.getElementById('recorded-audio-player');
    const downloadBtn = document.getElementById('download-audio-btn');
    const reTestBtn = document.getElementById('re-test-btn');

    if (!timerDisplay) return;

    const CIRCLE_CIRCUMFERENCE = 628;

    if (listenPromptBtn) {
        listenPromptBtn.addEventListener('click', () => {
            const promptContent = document.getElementById('exam-prompt-content');
            if (promptContent) {
                speakText(promptContent.innerText);
            }
        });
    }

    if (randomPromptBtn) {
        randomPromptBtn.addEventListener('click', () => {
            const randIdx = Math.floor(Math.random() * ALL_SITUATIONS_POOL.length);
            const randSit = ALL_SITUATIONS_POOL[randIdx];
            window.startExamWithPrompt(randSit);
        });
    }

    if (examTransBtn && examTransBox) {
        examTransBtn.addEventListener('click', () => {
            const isHidden = examTransBox.classList.toggle('hidden');
            if (isHidden) {
                examTransBtn.innerHTML = '<i class="fa-solid fa-language"></i> Dịch đề thi';
                examTransBtn.style.color = '';
                examTransBtn.style.background = '';
            } else {
                examTransBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Ẩn bản dịch';
                examTransBtn.style.color = 'var(--primary)';
                examTransBtn.style.background = '#dbeafe';
            }
        });
    }

    if (clearNotesBtn && scratchpad) {
        clearNotesBtn.addEventListener('click', () => {
            scratchpad.value = '';
            showToast('Đã xoá nội dung nháp');
        });
    }

    if (reTestBtn) {
        reTestBtn.addEventListener('click', () => {
            resetExam();
            const randIdx = Math.floor(Math.random() * ALL_SITUATIONS_POOL.length);
            window.startExamWithPrompt(ALL_SITUATIONS_POOL[randIdx]);
        });
    }

    function updateDisplay() {
        const minutes = Math.floor(state.timer.timeLeft / 60);
        const seconds = state.timer.timeLeft % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        const progress = state.timer.totalTime > 0 ? (state.timer.timeLeft / state.timer.totalTime) : 0;
        const offset = CIRCLE_CIRCUMFERENCE - (progress * CIRCLE_CIRCUMFERENCE);
        if (progressCircle) {
            progressCircle.style.strokeDashoffset = offset;
        }
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        try {
            recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = 'en-US';

            recognition.onresult = (event) => {
                let transcriptText = '';
                for (let i = 0; i < event.results.length; i++) {
                    transcriptText += event.results[i][0].transcript + ' ';
                }
                if (liveTranscript) {
                    liveTranscript.innerHTML = transcriptText;
                    const words = transcriptText.trim().split(/\s+/).filter(Boolean);
                    if (wordCounterBadge) {
                        wordCounterBadge.textContent = `${words.length} từ`;
                    }
                }
            };

            recognition.onerror = (err) => {
                console.log('Speech recognition notice:', err.error);
            };
        } catch (e) {
            console.log('SpeechRecognition setup error:', e);
        }
    }

    async function startRecordingAudio() {
        audioChunks = [];
        try {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                console.warn('getUserMedia not supported on this browser/environment');
                return;
            }
            audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            let options = { mimeType: 'audio/webm' };
            if (typeof MediaRecorder === 'undefined') return;
            if (!MediaRecorder.isTypeSupported || !MediaRecorder.isTypeSupported('audio/webm')) {
                if (MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported('audio/mp4')) {
                    options = { mimeType: 'audio/mp4' };
                } else {
                    options = {};
                }
            }

            mediaRecorder = new MediaRecorder(audioStream, options);
            mediaRecorder.ondataavailable = (e) => {
                if (e.data && e.data.size > 0) {
                    audioChunks.push(e.data);
                }
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: mediaRecorder.mimeType || 'audio/webm' });
                if (currentAudioBlobUrl) {
                    URL.revokeObjectURL(currentAudioBlobUrl);
                }
                currentAudioBlobUrl = URL.createObjectURL(audioBlob);
                
                if (recordedPlayer) {
                    recordedPlayer.src = currentAudioBlobUrl;
                }
                if (downloadBtn) {
                    downloadBtn.href = currentAudioBlobUrl;
                    const student = (state.student.name || 'HocVien').replace(/\s+/g, '_');
                    const now = new Date();
                    const dateStr = `${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}`;
                    downloadBtn.download = `VSTEP_Speaking_Part02_${student}_${dateStr}.webm`;
                }

                if (playbackBox) {
                    playbackBox.classList.remove('hidden');
                    playbackBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            };

            mediaRecorder.start(1000);

            if (recognition) {
                try {
                    recognition.start();
                } catch (e) {}
            }

            if (micVisualizer) micVisualizer.classList.remove('hidden');
        } catch (err) {
            console.warn('Microphone access notice:', err);
            showToast('⚠️ Chưa bật được micro. Đồng hồ vẫn tiếp tục đếm giờ!');
        }
    }

    function stopRecordingAudio() {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            try { mediaRecorder.stop(); } catch(e) {}
        }
        if (audioStream) {
            try { audioStream.getTracks().forEach(track => track.stop()); } catch(e) {}
            audioStream = null;
        }
        if (recognition) {
            try { recognition.stop(); } catch (e) {}
        }
        if (micVisualizer) micVisualizer.classList.add('hidden');
    }

    function setPhase(phase) {
        state.timer.phase = phase;
        state.timer.isPaused = false;

        if (phase === 'prep') {
            state.timer.timeLeft = 60;
            state.timer.totalTime = 60;
            phaseBadge.textContent = '⏳ GIAI ĐOẠN 1: CHUẨN BỊ (01 PHÚT)';
            phaseBadge.style.background = '#dbeafe';
            phaseBadge.style.color = '#1e40af';
            statusHint.innerHTML = 'Đang trong <strong>1 phút chuẩn bị</strong>. Hãy đọc kỹ đề bài và ghi chú nhanh dàn ý vào khung nháp bên phải.';
            
            startBtn.classList.add('hidden');
            if (pauseBtn) {
                pauseBtn.classList.remove('hidden');
                pauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Tạm dừng';
                pauseBtn.classList.remove('primary');
                pauseBtn.classList.add('secondary');
            }
            skipBtn.classList.remove('hidden');
            finishBtn.classList.add('hidden');
            if (playbackBox) playbackBox.classList.add('hidden');
            if (progressCircle) progressCircle.style.stroke = 'var(--primary, #2563eb)';
            if (liveTranscript) liveTranscript.innerHTML = '<em>Sẵn sàng nhận diện lời nói khi bắt đầu ghi âm...</em>';
            if (wordCounterBadge) wordCounterBadge.textContent = '0 từ';

        } else if (phase === 'speak') {
            state.timer.timeLeft = 180;
            state.timer.totalTime = 180;
            phaseBadge.textContent = '🔴 GIAI ĐOẠN 2: ĐANG GHI ÂM BÀI NÓI (03 PHÚT)';
            phaseBadge.style.background = '#fee2e2';
            phaseBadge.style.color = '#991b1b';
            statusHint.innerHTML = '<strong>Hệ thống đang ghi âm trực tiếp!</strong> Hãy tự tin trình bày trọn vẹn bài nói theo cấu trúc 3 bước.';

            startBtn.classList.add('hidden');
            if (pauseBtn) {
                pauseBtn.classList.remove('hidden');
                pauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Tạm dừng';
                pauseBtn.classList.remove('primary');
                pauseBtn.classList.add('secondary');
            }
            skipBtn.classList.add('hidden');
            finishBtn.classList.remove('hidden');
            if (progressCircle) progressCircle.style.stroke = '#ef4444';

            playBeep(880, 0.4);
            showToast('🎙️ BẮT ĐẦU GHI ÂM (03 PHÚT)! Hãy tự tin trình bày nhé!');
            startRecordingAudio();

        } else if (phase === 'finished') {
            phaseBadge.textContent = '🏆 HOÀN THÀNH BÀI THI!';
            phaseBadge.style.background = '#d1fae5';
            phaseBadge.style.color = '#065f46';
            statusHint.innerHTML = '<strong>Chúc mừng bạn đã hoàn thành bài thi!</strong> Bạn có thể nghe lại bài nói hoặc tải file ghi âm về máy bên dưới.';

            startBtn.classList.remove('hidden');
            startBtn.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Thi lại đề này';
            if (pauseBtn) pauseBtn.classList.add('hidden');
            skipBtn.classList.add('hidden');
            finishBtn.classList.add('hidden');

            stopRecordingAudio();
            if (window.confetti) {
                try { window.confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } }); } catch(e) {}
            }
            playBeep(523.25, 0.5);
            showToast('🎉 Chúc mừng bạn đã hoàn thành bài thi Speaking Part 02!');

        } else {
            state.timer.timeLeft = 60;
            state.timer.totalTime = 60;
            phaseBadge.textContent = '⏱️ SẴN SÀNG VÀO THI';
            phaseBadge.style.background = '#eff6ff';
            phaseBadge.style.color = '#1e40af';
            statusHint.innerHTML = 'Nhấp <strong>"Bắt đầu làm bài"</strong> để bắt đầu 1 phút chuẩn bị. Sau 1 phút, hệ thống sẽ tự động bật micro và đếm ngược 3 phút ghi âm.';

            startBtn.classList.remove('hidden');
            startBtn.innerHTML = '<i class="fa-solid fa-play"></i> Bắt đầu làm bài';
            if (pauseBtn) pauseBtn.classList.add('hidden');
            skipBtn.classList.remove('hidden');
            finishBtn.classList.add('hidden');
            if (micVisualizer) micVisualizer.classList.add('hidden');
            if (progressCircle) progressCircle.style.stroke = 'var(--primary, #2563eb)';
            stopRecordingAudio();
        }
        updateDisplay();
    }

    function tick() {
        if (state.timer.timeLeft > 0) {
            state.timer.timeLeft--;
            if (state.timer.timeLeft <= 5 && state.timer.timeLeft > 0) {
                playBeep(440, 0.08);
            }
            updateDisplay();
        } else {
            if (state.timer.phase === 'prep') {
                setPhase('speak');
            } else if (state.timer.phase === 'speak') {
                clearInterval(state.timer.interval);
                state.timer.interval = null;
                setPhase('finished');
            }
        }
    }

    startBtn.addEventListener('click', () => {
        if (state.timer.interval) return;

        if (state.timer.phase === 'idle' || state.timer.phase === 'finished') {
            setPhase('prep');
        }

        state.timer.interval = setInterval(tick, 1000);
        showToast('Bắt đầu 1 phút chuẩn bị! ⏳');
    });

    if (pauseBtn) {
        pauseBtn.addEventListener('click', () => {
            if (!state.timer.interval && !state.timer.isPaused) return;

            if (!state.timer.isPaused) {
                // Pause
                clearInterval(state.timer.interval);
                state.timer.interval = null;
                state.timer.isPaused = true;
                pauseBtn.innerHTML = '<i class="fa-solid fa-play"></i> Tiếp tục';
                pauseBtn.classList.add('primary');
                pauseBtn.classList.remove('secondary');
                if (mediaRecorder && mediaRecorder.state === 'recording') {
                    try { mediaRecorder.pause(); } catch(e) {}
                }
                showToast('Đã tạm dừng tính giờ ⏸️');
            } else {
                // Resume
                state.timer.isPaused = false;
                state.timer.interval = setInterval(tick, 1000);
                pauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Tạm dừng';
                pauseBtn.classList.remove('primary');
                pauseBtn.classList.add('secondary');
                if (mediaRecorder && mediaRecorder.state === 'paused') {
                    try { mediaRecorder.resume(); } catch(e) {}
                }
                showToast('Đang tiếp tục tính giờ ▶️');
            }
        });
    }

    skipBtn.addEventListener('click', () => {
        setPhase('speak');
        if (!state.timer.interval) {
            state.timer.interval = setInterval(tick, 1000);
        }
    });

    finishBtn.addEventListener('click', () => {
        if (state.timer.interval) {
            clearInterval(state.timer.interval);
            state.timer.interval = null;
        }
        setPhase('finished');
    });

    function resetExam() {
        if (state.timer.interval) {
            clearInterval(state.timer.interval);
            state.timer.interval = null;
        }
        state.timer.isPaused = false;
        setPhase('idle');
    }

    resetBtn.addEventListener('click', resetExam);
    window.resetExamTimer = resetExam;

    setPhase('idle');
}


/* ==========================================================================
   6. FLASHCARDS SYSTEM
   ========================================================================== */
const flashcardData = [
    // === B2 HIGH-IMPACT COLLOCATIONS ===
    { tag: "GIFT", en: "express care without putting pressure on budget", vi: "bày tỏ sự quan tâm mà không áp lực tài chính", hint: "B2 Gift - Financial reason" },
    { tag: "GIFT", en: "used on a regular basis instead of decoration", vi: "sử dụng thường xuyên thay vì để trang trí", hint: "B2 Gift - Utility reason" },
    { tag: "GIFT", en: "serve as a great reminder of this special occasion", vi: "kỷ vật tuyệt vời gợi nhớ về dịp đặc biệt này", hint: "B2 Gift - Emotional reason" },
    { tag: "GIFT", en: "leave a stronger impression due to uniqueness", vi: "để lại ấn tượng sâu sắc nhờ tính độc đáo", hint: "B2 Gift - Unique reason" },

    { tag: "ACTIVITY", en: "escape from daily pressure and unwind", vi: "thoát khỏi áp lực thường nhật và thư giãn", hint: "B2 Activity - Entertainment" },
    { tag: "ACTIVITY", en: "broaden horizons and become well-rounded", vi: "mở rộng tầm nhìn và phát triển toàn diện", hint: "B2 Activity - Educational" },
    { tag: "ACTIVITY", en: "improve both physical and mental health", vi: "nâng cao cả sức khỏe thể chất lẫn tinh thần", hint: "B2 Activity - Health" },
    { tag: "ACTIVITY", en: "spend quality time together and become closer", vi: "dành thời gian ý nghĩa bên nhau và thêm gắn kết", hint: "B2 Activity - Bonding" },
    { tag: "ACTIVITY", en: "expand social relationships with like-minded peers", vi: "mở rộng quan hệ xã hội với bạn bè cùng chí hướng", hint: "B2 Activity - Social" },

    { tag: "LOCATION", en: "stunning natural landscapes and tranquil setting", vi: "cảnh quan thiên nhiên tuyệt đẹp và không gian thanh bình", hint: "B2 Location - Nature" },
    { tag: "LOCATION", en: "well-equipped with modern facilities", vi: "được trang bị đầy đủ cơ sở vật chất hiện đại", hint: "B2 Location - Facilities" },
    { tag: "LOCATION", en: "experienced staff handling unexpected situations", vi: "đội ngũ nhân viên giàu kinh nghiệm xử lý linh hoạt", hint: "B2 Location - Event venue" },
    { tag: "LOCATION", en: "budget-friendly with reasonable service expenses", vi: "vừa túi tiền với chi phí dịch vụ hợp lý", hint: "B2 Location - Budget" },

    { tag: "TRANSPORT", en: "avoid traffic delays and manage time effectively", vi: "tránh tắc đường và quản lý thời gian hiệu quả", hint: "B2 Transport - Motorbike" },
    { tag: "TRANSPORT", en: "shield against harsh weather and ensure comfort", vi: "tránh thời tiết xấu và đảm bảo sự tiện nghi", hint: "B2 Transport - Car" },
    { tag: "TRANSPORT", en: "eco-friendly with zero carbon emissions", vi: "thân thiện môi trường không phát thải khí nhà kính", hint: "B2 Transport - Bicycle" },
    { tag: "TRANSPORT", en: "punctual schedule unaffected by road congestion", vi: "lịch trình đúng giờ không bị kẹt xe ảnh hưởng", hint: "B2 Transport - Train" },

    { tag: "CAREER", en: "match passion and stay motivated every day", vi: "đúng đam mê và luôn tràn đầy động lực mỗi ngày", hint: "B2 Career - Passion" },
    { tag: "CAREER", en: "apply theoretical knowledge to practical tasks", vi: "vận dụng kiến thức lý thuyết vào công việc thực tế", hint: "B2 Career - Major" },
    { tag: "CAREER", en: "gain practical experience and improve competencies", vi: "tích lũy kinh nghiệm thực tế và hoàn thiện năng lực", hint: "B2 Career - Development" },
    { tag: "CAREER", en: "achieve long-term financial stability", vi: "đạt được sự ổn định tài chính dài hạn", hint: "B2 Career - Salary" },
    { tag: "CAREER", en: "grow both professionally and personally", vi: "trưởng thành cả về chuyên môn lẫn kỹ năng cá nhân", hint: "B2 Career - Environment" },

    { tag: "SOLUTION", en: "yield immediate and visible improvements", vi: "mang lại kết quả cải thiện rõ rệt và ngay lập tức", hint: "B2 Solution - Efficiency" },
    { tag: "SOLUTION", en: "feasible and straightforward to incorporate into daily life", vi: "khả thi và đơn giản để áp dụng vào đời sống hàng ngày", hint: "B2 Solution - Practicality" },
    { tag: "SOLUTION", en: "sustainable long-term strategy building lifelong habits", vi: "chiến lược bền vững dài hạn xây dựng thói quen trọn đời", hint: "B2 Solution - Sustainability" },
    { tag: "SOLUTION", en: "address fundamental root cause rather than symptoms", vi: "giải quyết tận gốc rễ căn nguyên thay vì triệu chứng bề mặt", hint: "B2 Solution - Root cause" },

    { tag: "FACTOR", en: "guarantee superior quality and institutional prestige", vi: "bảo chứng chất lượng vượt trội và uy tín học thuật", hint: "B2 Factor - Reputation" },
    { tag: "FACTOR", en: "indispensable criterion ensuring financial peace of mind", vi: "tiêu chí không thể thiếu đảm bảo sự an tâm tài chính", hint: "B2 Factor - Finance" },
    { tag: "FACTOR", en: "eliminate arduous commuting burdens", vi: "loại bỏ gánh nặng di chuyển vất vả hàng ngày", hint: "B2 Factor - Location" },
    { tag: "FACTOR", en: "foundational quality establishing enduring trust", vi: "phẩm chất nền tảng xây dựng niềm tin bền vững", hint: "B2 Factor - Integrity" },
    { tag: "GIFT", en: "carry personal items", vi: "mang theo đồ đạc cá nhân", hint: "Benefits of handbag" },
    { tag: "GIFT", en: "keep personal belongings organized", vi: "giữ đồ đạc cá nhân gọn gàng", hint: "Benefits of handbag" },
    { tag: "GIFT", en: "support and protect the feet", vi: "nâng đỡ và bảo vệ bàn chân", hint: "Benefits of shoes" },
    { tag: "GIFT", en: "reduce eye strain & see clearly", vi: "giảm mỏi mắt & nhìn rõ ràng hơn", hint: "Benefits of glasses" },
    { tag: "GIFT", en: "check time & manage schedule better", vi: "xem giờ & quản lý thời gian tốt hơn", hint: "Benefits of watch" },
    { tag: "GIFT", en: "reduce outside noise & focus better", vi: "giảm tiếng ồn bên ngoài & tập trung hơn", hint: "Benefits of headphones" },
    { tag: "GIFT", en: "keep special memories & decorate room", vi: "lưu giữ kỷ niệm & trang trí phòng", hint: "Benefits of picture frame" },
    
    { tag: "ACTIVITY", en: "walk along the shore", vi: "đi dạo dọc bờ biển", hint: "Beach activity" },
    { tag: "ACTIVITY", en: "enjoy the fresh air and sunshine", vi: "tận hưởng không khí trong lành & ánh nắng", hint: "Outdoor activity" },
    { tag: "ACTIVITY", en: "spend quality time together", vi: "dành thời gian ý nghĩa bên nhau", hint: "Bonding activity" },
    { tag: "ACTIVITY", en: "maintain a healthy lifestyle", vi: "duy trì lối sống lành mạnh", hint: "Health benefits" },
    { tag: "ACTIVITY", en: "develop useful soft skills", vi: "phát triển kỹ năng mềm hữu ích", hint: "Educational activity" },
    
    { tag: "LOCATION", en: "comfortable and relaxing atmosphere", vi: "bầu không khí thoải mái và thư giãn", hint: "Choosing location" },
    { tag: "LOCATION", en: "well-equipped with modern facilities", vi: "trang bị đầy đủ cơ sở vật chất hiện đại", hint: "Event venue" },
    { tag: "LOCATION", en: "located in a convenient area", vi: "nằm ở vị trí thuận tiện đi lại", hint: "Location pro" },
    { tag: "LOCATION", en: "famous for local food and culture", vi: "nổi tiếng với ẩm thực & văn hoá địa phương", hint: "Tourism destination" },
    
    { tag: "TRANSPORT", en: "convenient and flexible", vi: "tiện lợi và linh hoạt (xe máy)", hint: "Motorbike" },
    { tag: "TRANSPORT", en: "avoid bad weather & travel safely", vi: "tránh thời tiết xấu & đi lại an toàn (ô tô)", hint: "Car" },
    { tag: "TRANSPORT", en: "fast and time-saving for long distance", vi: "nhanh và tiết kiệm thời gian đi xa (máy bay)", hint: "Plane" },
    { tag: "TRANSPORT", en: "affordable and eco-friendly", vi: "tiết kiệm chi phí & bảo vệ môi trường (xe buýt)", hint: "Bus" },
    
    { tag: "SOLUTION", en: "deals with the root cause of the problem", vi: "giải quyết tận gốc rễ của vấn đề", hint: "Solution reason" },
    { tag: "SOLUTION", en: "simple and practical to follow", vi: "đơn giản và thiết thực để thực hiện", hint: "Solution reason" },
    { tag: "SOLUTION", en: "creates lasting positive changes", vi: "tạo ra những thay đổi tích cực lâu dài", hint: "Long-term solution" },
    
    { tag: "CAREER", en: "turn lifelong dream into reality", vi: "biến ước mơ cả đời thành hiện thực", hint: "Full-time job" },
    { tag: "CAREER", en: "balance between work and personal life", vi: "cân bằng giữa công việc và đời sống cá nhân", hint: "Work-life balance" },
    { tag: "CAREER", en: "gain real work experience before graduation", vi: "tích luỹ kinh nghiệm thực tế trước tốt nghiệp", hint: "Part-time job" },
    { tag: "CAREER", en: "improve English speaking naturally", vi: "cải thiện phản xạ tiếng Anh tự nhiên", hint: "Part-time job" },
    { tag: "CAREER", en: "flexible schedule that fits student life", vi: "lịch làm việc linh hoạt phù hợp sinh viên", hint: "Part-time job" },
    
    { tag: "FACTOR", en: "guarantees high educational quality", vi: "đảm bảo chất lượng giáo dục hàng đầu", hint: "University ranking" },
    { tag: "FACTOR", en: "ensure financial stability for family", vi: "đảm bảo an toàn tài chính cho gia đình", hint: "Affordable tuition fees" },
    { tag: "FACTOR", en: "save travel time and commuting costs", vi: "tiết kiệm thời gian và chi phí đi lại", hint: "Distance / Location" },
    { tag: "FACTOR", en: "build long-term trust and loyalty", vi: "xây dựng niềm tin và sự gắn kết lâu dài", hint: "Honesty & integrity" },
    { tag: "FACTOR", en: "well-equipped labs and rich libraries", vi: "phòng thí nghiệm hiện đại & thư viện phong phú", hint: "Campus facilities" },
    { tag: "FACTOR", en: "offer great potential for advancement", vi: "mang lại tiềm năng phát triển lớn", hint: "Career prospects" },
    
    { tag: "FORM", en: "reach a wider audience online", vi: "tiếp cận lượng khán giả rộng lớn trên mạng", hint: "Social media / Video" },
    { tag: "FORM", en: "provide visual and memorable information", vi: "cung cấp thông tin trực quan và đáng nhớ", hint: "Poster / Slide" },
    { tag: "FORM", en: "encourage direct interaction and feedback", vi: "khuyến khích tương tác và phản hồi trực tiếp", hint: "Presentation / Peer review" },
    { tag: "FORM", en: "collect honest and objective opinions", vi: "thu thập ý kiến trung thực và khách quan", hint: "Anonymous survey" },
    
    { tag: "OTHER", en: "raise environmental awareness", vi: "nâng cao nhận thức bảo vệ môi trường", hint: "Community impact / Green campaign" },
    { tag: "OTHER", en: "stimulate imagination and critical thinking", vi: "kích thích trí tưởng tượng & tư duy phản biện", hint: "Sci-fi / Mystery books" },
    { tag: "OTHER", en: "develop practical life skills", vi: "phát triển các kỹ năng sống thực tế", hint: "Advanced challenge" }
];

function initFlashcards() {
    state.flashcards = [...flashcardData];
    const cardBox = document.getElementById('flashcard-box');
    const frontText = document.getElementById('fc-front-text');
    const frontTag = document.getElementById('fc-front-tag');
    const frontHint = document.getElementById('fc-front-hint');
    const backText = document.getElementById('fc-back-text');
    const backTag = document.getElementById('fc-back-tag');
    const backHint = document.getElementById('fc-back-hint');
    const prevBtn = document.getElementById('fc-prev-btn');
    const nextBtn = document.getElementById('fc-next-btn');
    const shuffleBtn = document.getElementById('fc-shuffle-btn');
    const counterDisplay = document.getElementById('fc-counter');
    const speakCardBtn = document.getElementById('fc-speak-btn');
    const filterSelect = document.getElementById('fc-filter');

    if (!cardBox) return;

    function renderCard() {
        const item = state.flashcards[state.currentCardIdx];
        if (!item) return;

        cardBox.classList.remove('flipped');

        frontTag.textContent = item.tag;
        frontText.textContent = item.en;
        frontHint.textContent = `💡 ${item.hint} (Nhấp vào thẻ để xem nghĩa tiếng Việt)`;

        backTag.textContent = item.tag;
        backText.textContent = item.vi;
        backHint.textContent = `🔊 ${item.en}`;

        counterDisplay.textContent = `${state.currentCardIdx + 1} / ${state.flashcards.length}`;
    }

    cardBox.addEventListener('click', () => {
        cardBox.classList.toggle('flipped');
    });

    prevBtn.addEventListener('click', () => {
        if (state.currentCardIdx > 0) {
            state.currentCardIdx--;
            renderCard();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (state.currentCardIdx < state.flashcards.length - 1) {
            state.currentCardIdx++;
            renderCard();
        }
    });

    shuffleBtn.addEventListener('click', () => {
        state.flashcards.sort(() => Math.random() - 0.5);
        state.currentCardIdx = 0;
        renderCard();
        showToast('Đã xáo trộn thứ tự thẻ! 🔀');
    });

    speakCardBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const item = state.flashcards[state.currentCardIdx];
        if (item) {
            speakText(item.en);
        }
    });

    if (filterSelect) {
        filterSelect.addEventListener('change', () => {
            const filterVal = filterSelect.value;
            if (filterVal === 'ALL') {
                state.flashcards = [...flashcardData];
            } else {
                state.flashcards = flashcardData.filter(c => c.tag === filterVal);
            }
            state.currentCardIdx = 0;
            renderCard();
        });
    }

    renderCard();
}

/* ==========================================================================
   7. TOAST HELPER
   ========================================================================== */
function showToast(msg) {
    const existing = document.querySelector('.toast-msg');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--primary-blue);"></i><span>${msg}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(15px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2800);
}


window.switchSampleCard = function(btn, panelId) {
    const parent = btn.closest('.sample-spotlight') || btn.closest('.sit-sample-box');
    if (!parent) return;
    const allBtns = parent.querySelectorAll('.sample-opt-btn, .sit-sample-opt-btn');
    const allPanels = parent.querySelectorAll('.sample-card-panel, .sit-sample-opt-panel');

    allBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    allPanels.forEach(panel => {
        if (panel.id === panelId) {
            panel.classList.remove('hidden');
            panel.style.display = 'block';
        } else {
            panel.classList.add('hidden');
            panel.style.display = 'none';
        }
    });
};
