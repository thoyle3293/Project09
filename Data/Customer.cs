﻿using System;
using System.Collections.Generic;

namespace Project09.Data
{
    public partial class Customer
    {
        public Customer()
        {
            Order = new HashSet<Order>();
        }

        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        public ICollection<Order> Order { get; set; }
    }
}
